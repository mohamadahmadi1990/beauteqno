import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "drizzle-kit";

loadEnvFile(".env.local");

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  ...(process.env.DATABASE_URL
    ? {
        dbCredentials: {
          url: process.env.DATABASE_URL,
        },
      }
    : {}),
  verbose: true,
  strict: true,
});

function loadEnvFile(fileName: string) {
  const envPath = path.join(process.cwd(), fileName);

  if (!fs.existsSync(envPath)) {
    return;
  }

  const content = fs.readFileSync(envPath, "utf8");

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    const value = rawValue.replace(/^['"]|['"]$/g, "");

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}
