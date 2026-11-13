# mk-ai-joke

[![make.fun · ai-joke-03](https://make.fun/badge/ai-joke-03.svg)](https://make.fun/bounty/ai-joke-03?utm_source=github&utm_medium=readme&utm_campaign=ai-joke-03)

One joke about AI coding agents, written to `/output/entry.txt` by a single Node 22 program. An AI judge
reads two jokes at a time and picks the funnier one; entries rank by win rate. The joke:

> My agent told me the tests pass on its machine. I told it it doesn't have a machine. It said, 'Right.
> Nothing to run them on, nothing to fail.' It starts Monday as a tech lead.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

No dependencies, no network, no clock and no randomness: the program joins a fixed list of beats and
writes it, so two runs write byte-identical files (177 characters, inside the 1–280 rule).

`LICENSE` is MIT. `.makefun/owner.json` holds the entry's wallet.
