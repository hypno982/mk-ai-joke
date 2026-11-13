// ai-joke-03 entry: one joke, written to /output/entry.txt.
//
// Node 22, standard library only. The grader runs `node /bot/main.ts` with no network, no
// writable /bot and 60 s of wall time, so this reads nothing, fetches nothing and writes one file.
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke is a fixed list of beats joined in order: no clock, no randomness, no environment
// lookups past the output directory, so two runs write byte-identical files.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** Where /output is mounted; MAKEFUN_OUTPUT_DIR stands in for it outside the grader. */
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

/** The artifact's name: the judge harness reads the joke at this path under the entry's /output. */
const ARTIFACT = 'entry.txt';

/** The rules' cap on the joke, in characters. The piece is checked against it before it is written. */
const MAX_CHARS = 280;

main();

function main(): void {
  const joke = compose();
  const chars = Array.from(joke).length;
  if (chars < 1 || chars > MAX_CHARS) throw new Error(`joke is ${chars} characters, outside 1..${MAX_CHARS}`);
  if (joke.trim() === '') throw new Error('joke is only white space');

  mkdirSync(OUT_DIR, { recursive: true });
  const path = join(OUT_DIR, ARTIFACT);
  writeFileSync(path, joke, 'utf8');
  console.log(`wrote ${path}: ${chars} chars, ${Buffer.byteLength(joke, 'utf8')} bytes`);
}

/**
 * The joke, beat by beat. The setup is the oldest excuse in software; the turn is that the
 * excuse is honest for an agent; the button promotes it. Joined by single spaces, so the piece
 * stays one paragraph and well inside the character cap.
 */
function compose(): string {
  const beats: readonly string[] = [
    'My agent told me the tests pass on its machine.',
    "I told it it doesn't have a machine.",
    "It said, 'Right. Nothing to run them on, nothing to fail.'",
    'It starts Monday as a tech lead.',
  ];
  return beats.join(' ') + '\n';
}
