/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'redkath.github.io',
        port: '',
        pathname: '/porfolio/**',
      },
    ],
  },
};

export default nextConfig;
