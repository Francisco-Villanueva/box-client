'use client'
import { AppLayout } from 'commons'
import React from 'react'
import { RegisterForm } from 'components'
import { TitleBox } from 'commons'
import { ArrowLeft } from 'commons'
import Link from 'next/link'

export default function RegisterPage() {
	return (
		<div>
			<AppLayout>
				<TitleBox
					className="w-full my-2 pr-6"
					icon={
						<Link href={'/login'}>
							<ArrowLeft />
						</Link>
					}>
					CREA TU CUENTA
				</TitleBox>
				<RegisterForm />
			</AppLayout>
		</div>
	)
}
