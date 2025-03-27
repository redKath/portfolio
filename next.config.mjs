/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "", 
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'redkath.github.io',
        port: '',
        pathname: '/portfolio/**',
      },
    ],
  },
};

export default nextConfig;
