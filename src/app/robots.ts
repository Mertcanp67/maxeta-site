import type { MetadataRoute } from "next";
import { basePath, siteUrl } from "@/lib/paths";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // GitHub Pages taslagi: tarama kapali, asil alan adinin SEO'suna zarar vermesin.
  if (basePath) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
