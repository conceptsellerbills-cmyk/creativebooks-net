import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/_next/"] },
    ],
    sitemap: "https://www.creativebooks.net/sitemap.xml",
    host: "https://www.creativebooks.net",
  };
}
