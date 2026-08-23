import { createFileRoute } from "@tanstack/react-router";

const paths = [
  "/",
  "/services/ai-automation",
  "/services/cloud-devops",
  "/services/modernization",
  "/services/web-development",
  "/case-studies",
  "/case-studies/invoice-automation",
  "/case-studies/bon-voyage-vintage",
  "/case-studies/cloud-migration",
  "/case-studies/claims-platform-modernization",
  "/about",
  "/contact",
];

const BASE_URL = "https://jabstechnicalconsulting.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>monthly</changefreq></url>`)
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
