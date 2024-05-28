/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESEND_API_KEY_DEV: process.env.RESEND_API_KEY_DEV,
    RESEND_API_KEY_PROD: process.env.RESEND_API_KEY_PROD,
  }
};

export default nextConfig;
