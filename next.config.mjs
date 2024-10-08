import { i18n } from './next-i18next.config.mjs'; // Use named import for i18n

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React's Strict Mode for development
  swcMinify: true, // Enable the SWC compiler for faster builds and minification
  images: {
    domains: ['cdn.usegalileo.ai'],
  },
};

// Combine and export both configurations
export default {
  ...nextConfig,
  i18n, // Include i18n settings here
};
