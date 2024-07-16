/** @type {import("next").NextConfig} */
import path from "path";

const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    eslint: {
        dirs: ["pages", "utils", "components"] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    sassOptions: {
        includePaths: [path.join(process.cwd(), "styles")]
    },
    images: {
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.unpad.ac.id",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "paus.unpad.ac.id",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "www.unpad.ac.id",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "secure.gravatar.com",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "svc.stg.unpad.ac.id",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "svc.unpad.ac.id",
                pathname: "**"
            }
        ],
        minimumCacheTTL: 3600,
        formats: ["image/webp"]
    },
    output: "standalone",
    sentry: {
        hideSourceMaps: true,
        debug: true,
        disableClientWebpackPlugin: true,
        disableServerWebpackPlugin: true
    }
};

export default nextConfig;
