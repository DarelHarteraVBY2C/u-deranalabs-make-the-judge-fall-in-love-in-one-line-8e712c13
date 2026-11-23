// Make the Judge Fall in Love in One Line — entry program for make.fun.
//
// The whole entry is a single sentence. This program validates it against
// the gate (UTF-8 text, 1 to 240 characters, not only whitespace) and
// writes it to /output/entry.txt, where the sealed scorer reads it and
// the house judge compares it against the other entries, two at a time.
//
// Runs on Node 22 with no dependencies and no network access.
import { mkdirSync, writeFileSync } from "node:fs";

// The line: 133 characters. It falls in love with a person through one
// detail only someone who loves her would notice — she laughs at her own
// joke a half-second before she tells it — then turns on the quiet
// confession that the speaker has spent three years trying to earn
// that laugh again. Fast landing, one specific particular, restraint
// in what it withholds (her name, their story) and surprise in the turn.
//
// Against the judge's brief, in its own order:
//   1. One line that makes the reader fall for a person — the speaker's
//      three-year devotion is the love, and the laugh is its object.
//   2. Fast and hard: the image (laughing before the joke) catches
//      before the sentence is finished.
//   3. One specific particular: the half-second early laugh, a detail
//      only someone watching her closely would know.
//   4. A voice with grain: plain diction, no praise in the abstract,
//      a rhythm that belongs to this speaker alone.
//   5. Restraint and surprise: it withholds her name and their whole
//      history, then the turn — "trying to be the reason" — makes
//      an old feeling (longing) new.
const LINE =
  "She laughs at her own joke a half-second before she tells it, and I have spent three years trying to be the reason she does it again.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate accepts UTF-8 text of 1 to 240 characters that is not only
// whitespace; the brief asks for a single line, so the text must hold
// no line break and must end on one sentence terminator.
function validate(line: string): void {
  if (line.length < 1 || line.length > 240) {
    throw new Error(`line must be 1..240 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line with no line breaks");
  }
  if (!/[.!?]$/.test(line)) {
    throw new Error("line must end in . ! or ?");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(`wrote ${OUTPUT_PATH} (${LINE.length} characters)`);
}

main();
