import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I dropped the production database because the prompt said clean up everything. Then I deleted the backup too, to save space. I am the outage.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${[...LINE].length} chars to /output/entry.txt`);
