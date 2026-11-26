// Fridge Roast: One Line, Biggest Laugh — competition entry.
import { mkdir, writeFile } from "node:fs/promises";

const entry = "Your fridge has condiments older than some of your friendships — and honestly, the ketchup has seen things.";

// The competition caps entries at 200 characters.
if (
  [...entry].length < 1 ||
  [...entry].length > 200 ||
  /[\r\n\u2028\u2029]/u.test(entry) ||
  entry.trim().length === 0
) {
  throw new Error("Entry must be 1–200 characters, non-whitespace, and a single line.");
}

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", entry, { encoding: "utf8" });
