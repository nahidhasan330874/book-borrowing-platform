/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        hostname: 'm.media-amazon.com',
      },
      {
        hostname: 'i.ibb.co',
      },
      
    ],
  },
};

export default nextConfig;
