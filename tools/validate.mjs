#!/usr/bin/env node
// Check bank.js before anyone studies from it.  node tools/validate.mjs [path/to/bank.js]
import { readFileSync } from "node:fs";
import vm from "node:vm";

const file = process.argv[2] || "bank.js";
const ctx = { window: {} };
try { vm.runInNewContext(readFileSync(file, "utf8"), ctx, { filename: file }); }
catch (e) { console.error(`${file} does not run: ${e.message}`); process.exit(1); }
const bank = ctx.window.LEARN_BANK;
if (!bank || !Array.isArray(bank.items)) { console.error("window.LEARN_BANK.items is missing"); process.exit(1); }

const errors = [], warnings = [], ids = new Set();
const domainIds = (bank.domains || []).map(d => d.id);
if (!bank.title) errors.push("bank.title is missing");
for (const [i, q] of bank.items.entries()) {
  const id = q.id || `#${i}`;
  if (!q.id) errors.push(`${id}: no id`);
  if (ids.has(q.id)) errors.push(`${id}: duplicate id`);
  ids.add(q.id);
  if (typeof q.stem !== "string" || q.stem.length < 20) errors.push(`${id}: stem missing or too short`);
  if (!Array.isArray(q.options) || q.options.length < 3) errors.push(`${id}: needs at least 3 options`);
  else {
    if (new Set(q.options).size !== q.options.length) errors.push(`${id}: duplicate options`);
    if (!Array.isArray(q.answer) || !q.answer.length || q.answer.some(a => !Number.isInteger(a) || a < 0 || a >= q.options.length)) errors.push(`${id}: answer must be zero-based indexes into options`);
    else if (q.answer.length >= q.options.length) errors.push(`${id}: every option is marked correct`);
    if (q.wrong && q.wrong.length !== q.options.length) errors.push(`${id}: wrong[] must have one entry per option`);
    if (q.wrong && Array.isArray(q.answer)) q.wrong.forEach((w, j) => { if ((w === "(correct)") !== q.answer.includes(j)) errors.push(`${id}: wrong[${j}] "(correct)" marker doesn't match answer`); });
  }
  if (Array.isArray(q.answer) && q.answer.length > 1 && !/choose|select|pick/i.test(q.stem || "")) warnings.push(`${id}: multi-answer stem should say how many to choose`);
  if (q.keyword && !(q.stem || "").includes(q.keyword)) errors.push(`${id}: keyword is not an exact substring of the stem`);
  if (!(q.difficulty >= 1 && q.difficulty <= 5)) errors.push(`${id}: difficulty must be 1-5`);
  if (!Array.isArray(q.concepts) || !q.concepts.length) errors.push(`${id}: needs at least one concept tag`);
  if (domainIds.length && !domainIds.includes(q.domain)) errors.push(`${id}: domain "${q.domain}" is not in bank.domains`);
  if (!q.why) warnings.push(`${id}: no "why" explanation`);
  if (!q.source) warnings.push(`${id}: no source pointer`);
}
const single = bank.items.filter(q => Array.isArray(q.answer) && q.answer.length === 1);
const pos = {}; for (const q of single) pos[q.answer[0]] = (pos[q.answer[0]] || 0) + 1;
const top = Math.max(0, ...Object.values(pos));
if (single.length >= 12 && top / single.length > 0.4) warnings.push(`correct answer sits in one position ${Math.round(top / single.length * 100)}% of the time; spread it out`);
const diff = {}; for (const q of bank.items) diff[q.difficulty] = (diff[q.difficulty] || 0) + 1;
const tags = {}; for (const q of bank.items) for (const c of q.concepts || []) tags[c] = (tags[c] || 0) + 1;
const thin = Object.entries(tags).filter(([, n]) => n < 2).map(([c]) => c);
if (thin.length) warnings.push(`concepts with only one question (tracking will be noisy): ${thin.join(", ")}`);
if (bank.items.length < 30) warnings.push(`only ${bank.items.length} questions; aim for 60+ so runs don't repeat`);

console.log(`${bank.title || "(untitled)"}: ${bank.items.length} questions, ${Object.keys(tags).length} concepts`);
console.log(`difficulty ${[1, 2, 3, 4, 5].map(d => `d${d}:${diff[d] || 0}`).join(" ")} · answer positions ${Object.entries(pos).map(([k, v]) => String.fromCharCode(65 + +k) + ":" + v).join(" ")}`);
for (const w of warnings) console.log("warn  " + w);
for (const e of errors) console.log("ERROR " + e);
process.exit(errors.length ? 1 : 0);
