'use client'

import { AppLayout, ArrowLeft, Title, TitleBox } from 'commons'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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

			<div className="flex flex-col justify-between gap-2 h-full mt-20">
				<section className="bg-white  flex items-center gap-2  p-4  rounded-2xl">
					<Image
						src={'/404.webp'}
						alt="s"
						width={100}
						height={100}
						className="rounded-2xl "
					/>

					<div>
						<Title>Lo siento! La página que estas buscando no existe.</Title>
					</div>
				</section>
			</div>
		</AppLayout>
	)
}
