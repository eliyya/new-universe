/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.discordapp.com',
            }
        ]
    },
    redirects: () => [
        {
            source: '/app',
            destination: '/app/calendar',
            permanent: true
        }
    ]
}

module.exports = nextConfig
