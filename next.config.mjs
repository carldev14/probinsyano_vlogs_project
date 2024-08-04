import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "s6.imgcdn.dev",
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;
