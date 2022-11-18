/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SITE_NAME: 'Next Mantine',
    BASE_URL: isProd ? 'http://localhost:3000' : 'http://localhost:3000'
  }
}

module.exports = nextConfig
