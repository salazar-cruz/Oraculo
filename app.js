const form = document.getElementById("palm-form");
const imageInput = document.getElementById("palm-image");
const preview = document.getElementById("preview");
const uploadEmpty = document.getElementById("upload-empty");
const removeImageButton = document.getElementById("remove-image");
const dropzone = document.getElementById("dropzone");
const errorBox = document.getElementById("form-error");
const submitButton = document.getElementById("submit-button");
const loadingSection = document.getElementById("oracle-loading");
const resultSection = document.getElementById("result");
const retakeWarning = document.getElementById("retake-warning");
const apiEndpoint = window.ORACULO_CONFIG?.apiUrl;

const traditionNames = {
  africana: "Leitura Africana",
  europeia: "Leitura Europeia",
  elfica: "Leitura Élfica",
  "magia-antiga": "Leitura de Magia Antiga"
};

let selectedFile = null;
let latestReading = null;

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("birth-date").max = new Date().toISOString().split("T")[0];

for (const radio of document.querySelectorAll('input[name="tradition"]')) {
  radio.addEventListener("change", () => {
    document.body.dataset.tradition = radio.value;
  });
}

imageInput.addEventListener("change", () => {
  const [file] = imageInput.files;
  if (file) setImage(file);
});

["dragenter", "dragover"].forEach((eventName) => {
  dropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropzone.classList.add("dragover");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  dropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropzone.classList.remove("dragover");
  });
});

dropzone.addEventListener("drop", (event) => {
  const [file] = event.dataTransfer.files;
  if (file) setImage(file);
});

removeImageButton.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  clearImage();
});

document.getElementById("retake-button").addEventListener("click", resetToForm);
document.getElementById("new-reading").addEventListener("click", resetToForm);
document.getElementById("share-reading").addEventListener("click", shareReading);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorBox.textContent = "";

  if (!selectedFile) {
    errorBox.textContent = "Selecciona uma fotografia nítida da palma da mão.";
    return;
  }

  if (!form.reportValidity()) return;

  try {
    setLoading(true);
    const imageDataUrl = await compressImage(selectedFile);
    const formData = new FormData(form);

    if (!apiEndpoint || apiEndpoint.includes("SUBDOMINIO")) {
      throw new Error("O endereço da API ainda não foi configurado no ficheiro config.js.");
    }

    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageDataUrl,
        birthDate: formData.get("birthDate"),
        sex: formData.get("sex"),
        tradition: formData.get("tradition")
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "A leitura não ficou disponível.");

    latestReading = data;
    renderReading(data, formData.get("tradition"));
  } catch (error) {
    setLoading(false);
    form.hidden = false;
    errorBox.textContent = error.message || "Ocorreu um erro inesperado.";
    document.getElementById("leitura").scrollIntoView({ behavior: "smooth" });
  }
});

function setImage(file) {
  if (!file.type.startsWith("image/")) {
    errorBox.textContent = "O ficheiro seleccionado não é uma imagem válida.";
    return;
  }

  if (file.size > 12 * 1024 * 1024) {
    errorBox.textContent = "A imagem é demasiado grande. Usa uma fotografia com menos de 12 MB.";
    return;
  }

  selectedFile = file;
  preview.src = URL.createObjectURL(file);
  preview.hidden = false;
  uploadEmpty.hidden = true;
  removeImageButton.hidden = false;
  errorBox.textContent = "";
}

function clearImage() {
  selectedFile = null;
  imageInput.value = "";
  preview.src = "";
  preview.hidden = true;
  uploadEmpty.hidden = false;
  removeImageButton.hidden = true;
}

async function compressImage(file) {
  const source = await loadImageSource(file);
  const sourceWidth = source.width || source.naturalWidth;
  const sourceHeight = source.height || source.naturalHeight;
  const maxSide = 1280;
  const scale = Math.min(1, maxSide / Math.max(sourceWidth, sourceHeight));
  const width = Math.round(sourceWidth * scale);
  const height = Math.round(sourceHeight * scale);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { alpha: false });
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(source, 0, 0, width, height);
  if (typeof source.close === "function") source.close();

  return canvas.toDataURL("image/jpeg", 0.82);
}

async function loadImageSource(file) {
  if ("createImageBitmap" in window) return createImageBitmap(file);

  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Não foi possível abrir a imagem seleccionada."));
    };
    image.src = objectUrl;
  });
}

function setLoading(active) {
  submitButton.disabled = active;
  form.hidden = active;
  resultSection.hidden = true;
  loadingSection.hidden = !active;
  if (active) loadingSection.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderReading(data, tradition) {
  setLoading(false);
  resultSection.hidden = false;
  retakeWarning.hidden = !data.needsRetake;

  document.getElementById("result-tradition").textContent = traditionNames[tradition] || "Leitura simbólica";
  document.getElementById("result-title").textContent = data.title || "A mensagem da tua palma";
  document.getElementById("quality-score").textContent = `${Number(data.imageQuality || 0)}%`;
  document.getElementById("retake-message").textContent = data.retakeReason || "Repete a fotografia com mais luz e a palma totalmente aberta.";
  document.getElementById("opening-message").textContent = data.opening || "";
  document.getElementById("life-reading").textContent = data.lines?.life || "A linha não ficou suficientemente visível.";
  document.getElementById("head-reading").textContent = data.lines?.head || "A linha não ficou suficientemente visível.";
  document.getElementById("heart-reading").textContent = data.lines?.heart || "A linha não ficou suficientemente visível.";
  document.getElementById("fate-reading").textContent = data.lines?.fate || "A linha não ficou suficientemente visível.";
  document.getElementById("archetype").textContent = data.archetype || "O Viajante entre Sinais";
  document.getElementById("closing-message").textContent = data.closing || "";

  const symbolsRow = document.getElementById("symbols-row");
  symbolsRow.innerHTML = "";
  for (const symbol of data.symbols || []) {
    const chip = document.createElement("span");
    chip.className = "symbol-chip";
    chip.textContent = symbol;
    symbolsRow.appendChild(chip);
  }

  resultSection.scrollIntoView({ behavior: "smooth" });
}

function resetToForm() {
  resultSection.hidden = true;
  loadingSection.hidden = true;
  form.hidden = false;
  document.getElementById("leitura").scrollIntoView({ behavior: "smooth" });
}

async function shareReading() {
  if (!latestReading) return;
  const text = `${latestReading.title || "A minha leitura da palma"}\n\n${latestReading.opening || ""}\n\nArquétipo: ${latestReading.archetype || ""}`;

  try {
    if (navigator.share) {
      await navigator.share({ title: "Oráculo da Palma", text, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(text);
      const button = document.getElementById("share-reading");
      const original = button.textContent;
      button.textContent = "Resultado copiado";
      setTimeout(() => { button.textContent = original; }, 1800);
    }
  } catch (error) {
    // O utilizador cancelou a partilha; não é necessário apresentar erro.
  }
}

function drawStars() {
  const canvas = document.getElementById("stars");
  const context = canvas.getContext("2d");
  const ratio = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    render();
  }

  function render() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const count = Math.floor((window.innerWidth * window.innerHeight) / 11000);
    for (let index = 0; index < count; index += 1) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const radius = Math.random() * 1.2 + 0.2;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(255,255,255,${Math.random() * 0.45 + 0.08})`;
      context.fill();
    }
  }

  window.addEventListener("resize", resize);
  resize();
}

drawStars();
