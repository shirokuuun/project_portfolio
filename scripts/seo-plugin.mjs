import { site } from "../src/data/site.js";

const imageUrl = new URL(site.image, site.url).href;
const personId = `${site.url}#person`;
const websiteId = `${site.url}#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.name,
      alternateName: site.alternateName,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}#webpage`,
      url: site.url,
      name: site.title,
      description: site.description,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      alternateName: site.alternateName,
      jobTitle: site.jobTitle,
      description:
        "Full stack developer based in the Philippines, building web and mobile applications.",
      url: site.url,
      image: imageUrl,
      sameAs: site.profiles,
    },
  ],
};

export const portfolioSeo = ({ preview = false } = {}) => ({
  name: "portfolio-seo",
  transformIndexHtml() {
    const meta = (name, content) => ({
      tag: "meta",
      attrs: { name, content },
      injectTo: "head",
    });
    const og = (property, content) => ({
      tag: "meta",
      attrs: { property, content },
      injectTo: "head",
    });

    return [
      { tag: "title", children: site.title, injectTo: "head" },
      meta("description", site.description),
      meta("author", site.name),
      meta(
        "robots",
        preview ? "noindex, follow" : "index, follow, max-image-preview:large",
      ),
      {
        tag: "link",
        attrs: { rel: "canonical", href: site.url },
        injectTo: "head",
      },
      og("og:type", "website"),
      og("og:title", site.title),
      og("og:description", site.description),
      og("og:url", site.url),
      og("og:site_name", site.name),
      og("og:locale", "en_US"),
      og("og:image", imageUrl),
      og("og:image:alt", `Portrait of ${site.name}`),
      meta("twitter:card", "summary"),
      meta("twitter:title", site.title),
      meta("twitter:description", site.description),
      meta("twitter:image", imageUrl),
      meta("twitter:image:alt", `Portrait of ${site.name}`),
      {
        tag: "script",
        attrs: { type: "application/ld+json" },
        children: JSON.stringify(structuredData).replaceAll("<", "\\u003c"),
        injectTo: "head",
      },
    ];
  },
  generateBundle() {
    this.emitFile({
      type: "asset",
      fileName: "robots.txt",
      source: `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap.xml", site.url).href}\n`,
    });
    this.emitFile({
      type: "asset",
      fileName: "sitemap.xml",
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${site.url}</loc>\n  </url>\n</urlset>\n`,
    });
  },
});
