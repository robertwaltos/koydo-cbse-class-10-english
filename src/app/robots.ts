import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://cbse-class-10-english.koydo.app/sitemap.xml",
    host: "https://cbse-class-10-english.koydo.app",
  };
}
