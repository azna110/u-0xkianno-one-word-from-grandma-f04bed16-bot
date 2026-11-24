import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Grandma: the single word a grandma would text about AI.
// "robit" is her typo for "robot": warm, a little baffled, instantly
// readable, tied to machines, and funny in one word with no caption.
// The gate allows 1 to 30 characters of UTF-8 text; "robit" is 5.
// Deterministic: no clock, no randomness, no network, same bytes always.
const WORD = "robit";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
