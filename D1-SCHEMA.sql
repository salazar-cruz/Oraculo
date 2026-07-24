CREATE TABLE IF NOT EXISTS country_stats (
  country_code TEXT PRIMARY KEY,
  reading_count INTEGER NOT NULL DEFAULT 0 CHECK (reading_count >= 0),
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
