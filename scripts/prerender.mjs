import { readFile, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "../dist-ssr/App.js";

const output = new URL("../dist/index.html", import.meta.url);
const template = await readFile(output, "utf8");
const root = '<div id="root"></div>';

if (template.split(root).length !== 2) {
  throw new Error(
    "Pre-rendering requires exactly one empty application root in dist/index.html.",
  );
}

const markup = renderToString(createElement(App));
await writeFile(
  output,
  template.replace(root, () => `<div id="root">${markup}</div>`),
);
console.log(
  `Pre-rendered the portfolio homepage (${markup.length.toLocaleString()} characters of HTML).`,
);
