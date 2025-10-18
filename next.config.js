/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/sarzamin_omran" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/sarzamin_omran/" : "",
};

module.exports = nextConfig;
