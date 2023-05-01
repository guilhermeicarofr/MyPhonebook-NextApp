/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD
  }
}

module.exports = nextConfig
