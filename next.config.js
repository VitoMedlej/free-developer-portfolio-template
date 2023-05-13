/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['open.cruip.com','ucarecdn.com', 'www.svgrepo.com','images.unsplash.com', 'res.cloudinary.com']
    },
    webpack(config) {
        config
            .module
            .rules
            .push({test: /\.svg$/, use: ["@svgr/webpack"]});

        return config;
    }
}

module.exports = nextConfig
