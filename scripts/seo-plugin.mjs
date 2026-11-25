import { site } from "../src/data/site.js";
import { projectContent, projectPath } from "../src/data/projectContent.js";

const imageUrl = new URL(site.image, site.url).href;
const personId = `${site.url}#person`;
const websiteId = `${site.url}#website`;
const startMarker = "<!-- portfolio-seo:start -->";
const endMarker = "<!-- portfolio-seo:end -->";
const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export const injectPageSeo = (html, pathname = "/", preview = false) => {
  const project = projectContent.find((item) => pathname.replace(/\/$/, "") === `/projects/${item.id}`);
  const home = pathname === "/" || pathname === "/index.html";
  const title = project ? `${project.fullTitle || project.title} | ${site.name}` : home ? site.title : `Page not found | ${site.name}`;
  const description = project ? project.summary : home ? site.description : "This page could not be found. Explore Marcus Neo Rangel’s portfolio.";
  const url = project ? new URL(projectPath(project), site.url).href : home ? site.url : new URL("404.html", site.url).href;
  const graph = [
    {
      "@type": "WebSite", "@id": websiteId, url: site.url, name: site.name,
      alternateName: site.alternateName, inLanguage: "en", publisher: { "@id": personId },
    },
    {
      "@type": home ? "ProfilePage" : "WebPage", "@id": `${url}#webpage`, url,
      name: title, description, isPartOf: { "@id": websiteId },
      ...(home ? { mainEntity: { "@id": personId } } : project ? {
        mainEntity: { "@type": "CreativeWork", name: project.fullTitle || project.title,
          description: project.description, author: { "@id": personId }, url,
          keywords: project.tech.join(", ") },
      } : {}),
    },
    {
      "@type": "Person", "@id": personId, name: site.name, alternateName: site.alternateName,
      jobTitle: site.jobTitle, description: site.description, url: site.url,
      image: imageUrl, sameAs: site.profiles,
    },
  ];
  const meta = (name, value) => `<meta name="${name}" content="${escape(value)}">`;
  const og = (name, value) => `<meta property="${name}" content="${escape(value)}">`;
  const tags = [
    startMarker,
    `<title>${escape(title)}</title>`,
    meta("description", description), meta("author", site.name),
    meta("robots", preview || (!home && !project) ? "noindex, follow" : "index, follow, max-image-preview:large"),
    `<link rel="canonical" href="${escape(url)}">`,
    og("og:type", "website"), og("og:title", title), og("og:description", description),
    og("og:url", url), og("og:site_name", site.name), og("og:locale", "en_US"),
    og("og:image", imageUrl), og("og:image:alt", `Portrait of ${site.name}`),
    meta("twitter:card", "summary"), meta("twitter:title", title),
    meta("twitter:description", description), meta("twitter:image", imageUrl),
    meta("twitter:image:alt", `Portrait of ${site.name}`),
    `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c")}</script>`,
    endMarker,
  ].join("\n");
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker);
  if (start !== -1 && end !== -1) {
    return html.slice(0, start) + tags + html.slice(end + endMarker.length);
  }
  return html.replace("</head>", `${tags}\n</head>`);
};

export const portfolioSeo = ({ preview = false } = {}) => ({
  name: "portfolio-seo",
  transformIndexHtml(html, context) {
    return injectPageSeo(html, context.path, preview);
  },
  generateBundle() {
    this.emitFile({ type: "asset", fileName: "robots.txt",
      source: `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap.xml", site.url).href}\n`,
    });
    const urls = [site.url, ...projectContent.map((project) => new URL(projectPath(project), site.url).href)];
    this.emitFile({ type: "asset", fileName: "sitemap.xml",
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}\n</urlset>\n`,
    });
  },
});
