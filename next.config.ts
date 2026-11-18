import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const repositoryPath = "/phindi-ngcobo";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // The dev server is opened at 127.0.0.1 while Next treats that host as
  // cross-origin. Without this, client JavaScript and the enquiry form do not run.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  ...(githubPages
    ? {
        basePath: repositoryPath,
        assetPrefix: repositoryPath,
      }
    : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
