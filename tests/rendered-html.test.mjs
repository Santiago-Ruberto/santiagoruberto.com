import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the preserved page content in the local project", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Thousands of years ago, the first man discovered how to make fire/);
  assert.match(page, /Howard Roark’s courtroom speech, Part IV, Chapter 18/);
  assert.match(page, /I’m building/);
  assert.match(page, /The_Fountainhead/);
  assert.match(page, /apps\.apple\.com\/us\/app\/melian\/id6738385324/);
  assert.match(layout, /title: "Santiago Ruberto"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /codex-preview|Your site is taking shape|SkeletonPreview/);
  await assert.rejects(access(new URL("../app/_sites-preview/", import.meta.url)));
});
