import type { NextConfig } from "next";

/**
 * Site kendi alan adinda (https://maxetadecor.com) kok dizinden yayinlanir;
 * basePath/assetPrefix yoktur. Yerel gelistirme de ayni sekilde calisir.
 */
const nextConfig: NextConfig = {
  //     Statik olarak yuklenir; sunucu tarafi kod yok.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
