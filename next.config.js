/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'imgs.elpais.com.uy',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'i.pinimg.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'boxappbucket.s3.sa-east-1.amazonaws.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
