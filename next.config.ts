import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: false,
      },
    ];
  },
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;
