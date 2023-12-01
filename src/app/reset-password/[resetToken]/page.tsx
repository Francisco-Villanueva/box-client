'use client'
import { AppLayout, ArrowLeft, TitleBox } from 'commons'
import UpdatePasswordView from 'components/UpdatePasswordView'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import React from 'react'

export default function UpdatePasswordPage() {
	const { resetToken } = useParams()

	return (
		<AppLayout>
			<TitleBox
				className="w-full my-2 pr-6"
				icon={
					<Link href={'/login'}>
						<ArrowLeft />
					</Link>
				}>
				ACTUALIZAR CONSTRASEÑA
			</TitleBox>
			<UpdatePasswordView resetToken={resetToken} />
		</AppLayout>
	)
}
