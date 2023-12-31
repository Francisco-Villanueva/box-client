import type { Metadata } from 'next'
import { Roboto, Saira } from 'next/font/google'
import './globals.css'
import Providers from './Providers'
import { ReactNode } from 'react'

const roboto = Roboto({
	weight: ['100', '300', '400', '500'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
})

const saira = Saira({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-saira',
})

export const metadata: Metadata = {
	title: 'BOX APP',
	description: 'App by co-workers',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${roboto.variable} ${saira.variable}`}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
