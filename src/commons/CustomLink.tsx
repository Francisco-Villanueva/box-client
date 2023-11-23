import React, { ReactNode } from 'react'
import Link from 'next/link'
import { LinkProps } from 'next/link'

interface CustomLinkProps extends LinkProps {
	children?: ReactNode
	className?: string
}

export function CustomLink({ href, children, className }: CustomLinkProps) {
	return (
		<Link
			href={href}
			target={
				typeof href === 'string' && href.startsWith('http') ? '_blank' : undefined
			}
			className={`text-darkGreen font-semibold font-roboto underline text-sm flex items-center mt-3 ${className}`}>
			{children}
		</Link>
	)
}
