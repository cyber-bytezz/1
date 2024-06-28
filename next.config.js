/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const path = require("path");
const fs = require("fs");

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com"]
    },
    env: {
        siteTitle: "Teddlo",
        siteDescription: "Your company description.",
        siteKeywords: "your company keywords",
        siteUrl: "www.teddlo.com",
        siteImagePreviewUrl: "/favicon.png",
        twitterHandle: "@your_handle"
    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    ...createSecureHeaders(),
                    // HSTS Preload: https://hstspreload.org/
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    }
                ]
            }
        ];
    },
    webpack: (config, { isServer }) => {
        config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
        config.resolve.alias['@components'] = path.join(__dirname, 'components');
        config.resolve.alias['@utils'] = path.join(__dirname, 'utils');
        return config;
    }
};

module.exports = nextConfig;
