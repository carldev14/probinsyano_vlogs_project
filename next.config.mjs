

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TOKEN: process.env.TOKEN,
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [

                    { key: "Access-Control-Allow-Credentials", value: "true" },

                    { key: "Access-Control-Allow-Origin", value: "https://probinsyano-vlogs-project.vercel.app/" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },

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
            },
            {
                protocol: 'https',
                hostname: "files.edgestore.dev",
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;
