import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'almaty.mart.kz' },
      { protocol: 'https', hostname: 'economist.kg' },
      { protocol: 'https', hostname: 'img.hhcdn.ru' },
      { protocol: 'https', hostname: 'static.tildacdn.one' },
      { protocol: 'https', hostname: 'attachments.gorgias.help' },
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com' },
      { protocol: 'https', hostname: 'portal.powertec.com.au' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
    ],
  },
};

export default nextConfig;
