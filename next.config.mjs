/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  output: "export",
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Matching all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' https://redkath.github.io; script-src 'self'; style-src 'self';", // Adjust as needed
          },
        ],
      },
    ];
  },
};

export default nextConfig;
