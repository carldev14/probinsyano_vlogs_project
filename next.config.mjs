import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
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
