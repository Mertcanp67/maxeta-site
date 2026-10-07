import type { NextConfig } from "next";

/**
 * GitHub Pages alt klasorde (ornek: /maxwall-site) yayinlanirken
 * NEXT_PUBLIC_BASE_PATH tanimlanir ve basePath/assetPrefix devreye girer.
 * Degisken bos oldugunda (yerel gelistirme ve Cloudflare Pages derlemesi)
 * site eskisi gibi kok dizinde calisir.
 * Ayni degisken src/lib/paths.ts tarafindan da okunur.
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  //     Cloudflare Pages'e statik yüklenir; sunucu tarafı kod yok.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
