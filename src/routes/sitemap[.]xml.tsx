import { createFileRoute } from "@tanstack/react-router";

const paths = [
  "/",
  "/services/ai-automation",
  "/services/cloud-devops",
  "/services/modernization",
  "/services/web-development",
  "/case-studies/invoice-automation",
  "/about",
  "/contact",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((p) => `  <url><loc>${origin}${p}</loc><changefreq>monthly</changefreq></url>`)
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
