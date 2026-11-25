import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { site } from "../src/data/site.js";
import { projectContent, projectPath } from "../src/data/projectContent.js";
import { injectPageSeo } from "../scripts/seo-plugin.mjs";

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

test("crawler files list the homepage and every project page", async () => {
  const robots = await readFile(path.join(output, "robots.txt"), "utf8");
  const sitemap = await readFile(path.join(output, "sitemap.xml"), "utf8");
  assert.match(robots, /User-agent: \*\nAllow: \//);
  assert.ok(robots.includes(`Sitemap: ${site.url}sitemap.xml`));
  assert.deepEqual(
    [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]),
    [site.url, ...projectContent.map((project) => new URL(projectPath(project), site.url).href)],
  );
});

test("project cards use real links instead of opening dialogs", () => {
  assert.doesNotMatch(html, /<dialog\b|<button[^>]+href=/);
  for (const project of projectContent) {
    const links = [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)]
      .filter((match) => match[1] === projectPath(project));
    assert.equal(links.length, 3, `${project.title}: preview, title, and details must all link to its page`);
  }
});

for (const project of projectContent) {
  test(`${project.title} has a direct-load page, its own metadata, and valid assets`, async () => {
    const page = await readFile(path.join(output, "projects", project.id, "index.html"), "utf8");
    const pageHead = page.split("</head>")[0];
    const url = new URL(projectPath(project), site.url).href;
    assert.ok(pageHead.includes(`<title>${project.fullTitle || project.title} | ${site.name}</title>`));
    assert.ok(pageHead.includes(`rel="canonical" href="${url}"`));
    assert.ok(pageHead.includes(`property="og:url" content="${url}"`));
    assert.equal((pageHead.match(/<title>/g) ?? []).length, 1);
    assert.equal((page.match(/<h1\b/g) ?? []).length, 1);
    const body = page.split("</head>")[1];
    assert.match(body, /<h2 id="project-features">What it does<\/h2>/);
    assert.equal((body.match(/<h2\b/g) ?? []).length, 1);
    for (const feature of project.features) {
      assert.ok(body.includes(feature), `Missing feature: ${feature}`);
    }
    assert.ok(body.includes(project.summary));
    assert.match(body, /aria-label="Technologies used"/);
    for (const tech of project.tech) assert.ok(body.includes(`<li>${tech}</li>`));
    assert.doesNotMatch(body, /How it was built|About the project|NEXT PROJECT/);
    if (project.id === "peak") {
      assert.doesNotMatch(body, /Interactive Peak preview|Peak appearance|Peak preview view/);
      assert.match(body, /class="project-page-image"/);
    }
    assert.match(page, /href="\/#projects"/);
    assert.doesNotMatch(page, /<dialog\b|id="hero-title"|id="contact-name"/);
    const schema = JSON.parse(pageHead.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    const webpage = schema["@graph"].find((item) => item["@type"] === "WebPage");
    assert.equal(webpage.url, url);
    assert.equal(webpage.mainEntity.name, project.fullTitle || project.title);
    for (const [, resource] of page.matchAll(/src="(\/[^"?#]+)"/g)) {
      await access(path.join(output, decodeURIComponent(resource)));
    }
    if (project.id === "busgo") {
      assert.match(body, /aria-label="BusGo connected app screenshots"/);
      assert.equal((body.match(/class="busgo-showcase-panel"/g) ?? []).length, 5);
    }
  });
}

test("unknown pages have an unindexed fallback with a route home", async () => {
  const page = await readFile(path.join(output, "404.html"), "utf8");
  assert.match(page, /Page not found/);
  assert.match(page, /name="robots" content="noindex, follow"/);
  assert.match(page, /href="\/#projects"/);
});

test("preview metadata stays unindexed on project pages", () => {
  const page = injectPageSeo(html, "/projects/peak/", true);
  assert.match(page, /name="robots" content="noindex, follow"/);
  assert.equal((page.match(/<title>/g) ?? []).length, 1);
  assert.ok(page.includes(`<title>Peak | ${site.name}</title>`));
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
