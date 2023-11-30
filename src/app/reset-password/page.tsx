'use client'

import { AppLayout, ArrowLeft, TitleBox } from 'commons'
import { ResetPasswordView } from 'components'
import Link from 'next/link'
import React from 'react'

export default function ResetPasswordPage() {
	return (
		<>
			<AppLayout>
				<TitleBox
					className="w-full my-2 pr-6"
					icon={
						<Link href={'/login'}>
							<ArrowLeft />
						</Link>
					}>
					RESTABLECE CONSTRASEÑA
				</TitleBox>
				<ResetPasswordView />
			</AppLayout>
		</>
	)
}
