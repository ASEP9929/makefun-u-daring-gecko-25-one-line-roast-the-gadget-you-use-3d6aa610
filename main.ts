import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Draft: one-line roast of a daily gadget (smartwatch).
const line =
  "My smartwatch throws a party every time I stand up — after silently watching me sit through a three-hour meeting it never once suggested I leave.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`Wrote ${line.length} characters to entry.txt`);
