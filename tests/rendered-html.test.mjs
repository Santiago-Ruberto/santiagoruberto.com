import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("lists posts on the homepage and Thoughts in the requested order", async () => {
  for (const path of ["index", "thoughts"]) {
    const html = await readFile(
      new URL(`../.next/server/app/${path}.html`, import.meta.url),
      "utf8",
    );
    const list = html.match(/<ul class="thoughts-list"[^>]*>(.*?)<\/ul>/s)?.[1];
    assert.ok(list, `${path} renders the post list`);
    const entries = [...list.matchAll(/<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gs)];
    assert.deepEqual(entries.map((entry) => [entry[1], entry[2]]), [
      ["/thoughts/howard-roark-courtroom-speech", "Howard Roark’s courtroom speech, Part IV, Chapter 18"],
      ["/thoughts/oscar-bosetti", "Oscar Bosetti"],
    ]);
    assert.doesNotMatch(html, /Thousands of years ago, the first man discovered how to make fire/);
    assert.doesNotMatch(html, /Product Roadmap|product-roadmap-q3-q4/);
  }
});

test("keeps the preserved speech in its own post", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../.next/server/app/thoughts/howard-roark-courtroom-speech.html", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Thousands of years ago, the first man discovered how to make fire/);
  assert.match(page, /Howard Roark’s courtroom speech, Part IV, Chapter 18/);
  assert.match(page, /The_Fountainhead/);
  const article = page.match(/<article>(.*?)<\/article>/s)?.[1];
  assert.ok(article);
  const entities = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#x27;": "'" };
  const paragraphs = [...article.matchAll(/<p>(.*?)<\/p>/gs)].map((match) =>
    match[1].replace(/&amp;|&lt;|&gt;|&quot;|&#x27;/g, (entity) => entities[entity]),
  );
  assert.equal(paragraphs.length, 40);
  assert.equal(
    createHash("sha256").update(paragraphs.join("\0")).digest("hex"),
    "9acd4c66cef5fdcfed2bf5c5814770eca5d5a2e9363dfeffea7da4ceab01e907",
    "all speech paragraphs stay unchanged after moving off the homepage",
  );
  assert.doesNotMatch(page, /I’m building|apps\.apple\.com\/us\/app\/melian\/id6738385324/);
  assert.match(layout, /title: "Santiago Ruberto"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /codex-preview|Your site is taking shape|SkeletonPreview/);
  await assert.rejects(access(new URL("../app/_sites-preview/", import.meta.url)));
});
