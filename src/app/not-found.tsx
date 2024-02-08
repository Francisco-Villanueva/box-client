'use client'

import { AppLayout, ArrowLeft, TitleBox } from 'commons'
import { useRouter } from 'next/navigation'

export default function Loading() {
	const router = useRouter()
	return (
		<AppLayout>
			<TitleBox
				variant="primary"
				icon={
					<ArrowLeft
						onClick={() => {
							router.back()
							router.back()
						}}
					/>
				}
				className="w-full my-2 pr-6">
				Página no encontrada
			</TitleBox>
		</AppLayout>
	)
}
