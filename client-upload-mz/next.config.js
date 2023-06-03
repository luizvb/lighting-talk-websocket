/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        AWS_KEY: process.env.AWS_KEY,
        AWS_SECRET: process.env.AWS_SECRET,
        AWS_REGION: process.env.AWS_REGION,
        AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
    }
}

module.exports = nextConfig
