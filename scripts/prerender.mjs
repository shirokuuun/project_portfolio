import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "../dist-ssr/App.js";
import { projectContent, projectPath } from "../src/data/projectContent.js";
import { injectPageSeo } from "./seo-plugin.mjs";

const output = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", output), "utf8");
const root = '<div id="root"></div>';
if (template.split(root).length !== 2) {
  throw new Error("Pre-rendering requires exactly one empty application root in dist/index.html.");
}
const routes = [
  { pathname: "/", file: "index.html" },
  ...projectContent.map((project) => ({ pathname: projectPath(project), file: `projects/${project.id}/index.html` })),
  { pathname: "/404.html", file: "404.html" },
];
const preview = /name="robots" content="noindex/.test(template);
for (const route of routes) {
  const markup = renderToString(createElement(App, { pathname: route.pathname }));
  const html = injectPageSeo(template, route.pathname, preview).replace(root, () => `<div id="root">${markup}</div>`);
  const destination = new URL(route.file, output);
  await mkdir(new URL(".", destination), { recursive: true });
  await writeFile(destination, html);
  console.log(`Pre-rendered ${route.pathname}`);
}
