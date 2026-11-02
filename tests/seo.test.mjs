import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { site } from "../src/data/site.js";

const output = fileURLToPath(new URL("../dist/", import.meta.url));
const html = await readFile(path.join(output, "index.html"), "utf8");
const head = html.split("</head>")[0];

test("production HTML contains the portfolio content before JavaScript executes", () => {
  const root = html.split('<div id="root">')[1];
  assert.ok(root, "The app root must exist.");
  for (const content of [
    "Marcus Neo Rangel",
    "Philippines",
    "BusGo",
    "Human Resource",
    "Peak",
  ]) {
    assert.ok(
      root.includes(content),
      `Missing pre-rendered content: ${content}`,
    );
  }
  assert.match(root, /<h1\b/);
  assert.doesNotMatch(root, /<div id="root"><\/div>/);
});

test("production metadata has one full-name title, canonical URL, and indexable robots policy", () => {
  assert.equal((head.match(/<title>/g) ?? []).length, 1);
  assert.match(
    head,
    /<title>Marcus Neo Rangel \| Full Stack Developer<\/title>/,
  );
  assert.equal((head.match(/name="description"/g) ?? []).length, 1);
  assert.equal((head.match(/rel="canonical"/g) ?? []).length, 1);
  assert.ok(head.includes(`rel="canonical" href="${site.url}"`));
  assert.ok(head.includes(`property="og:url" content="${site.url}"`));
  assert.ok(
    head.includes(
      `property="og:image" content="${new URL(site.image, site.url).href}"`,
    ),
  );
  assert.doesNotMatch(head, /noindex|%[A-Z_]+%/);
});

test("profile structured data connects the full name, alternate name, and public profiles", () => {
  const json = head.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  )?.[1];
  assert.ok(json, "JSON-LD must be in the initial document head.");
  const graph = JSON.parse(json)["@graph"];
  const person = graph.find((entry) => entry["@type"] === "Person");
  const profile = graph.find((entry) => entry["@type"] === "ProfilePage");
  const website = graph.find((entry) => entry["@type"] === "WebSite");
  assert.equal(person.name, "Marcus Neo Rangel");
  assert.equal(person.alternateName, "Neo Rangel");
  assert.deepEqual(person.sameAs, site.profiles);
  assert.equal(person.url, site.url);
  assert.equal(profile.mainEntity["@id"], person["@id"]);
  assert.equal(profile.isPartOf["@id"], website["@id"]);
});

test("crawler files list only the canonical homepage and allow its resources", async () => {
  const robots = await readFile(path.join(output, "robots.txt"), "utf8");
  const sitemap = await readFile(path.join(output, "sitemap.xml"), "utf8");
  assert.match(robots, /User-agent: \*\nAllow: \//);
  assert.ok(robots.includes(`Sitemap: ${site.url}sitemap.xml`));
  assert.deepEqual(
    [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]),
    [site.url],
  );
});

test("pre-rendered local assets and the social portrait exist in the deployed output", async () => {
  const resources = new Set(
    [...html.matchAll(/(?:src|href)="(\/[^"#?]+)(?:[?#][^"]*)?"/g)].map(
      (match) => match[1],
    ),
  );
  resources.add(site.image);
  for (const resource of resources) {
    await assert.doesNotReject(
      access(path.join(output, decodeURIComponent(resource))),
      `Missing asset: ${resource}`,
    );
  }
});
