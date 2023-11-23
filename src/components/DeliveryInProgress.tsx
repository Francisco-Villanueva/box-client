'use client'
import React from 'react'
import { Button, TitleBox, GoogleMap, MapDescription } from 'commons'
import { ArrowLeft } from 'commons/Icons'
import Link from 'next/link'
import { message } from 'antd'
import { useRouter } from 'next/navigation'

interface DeliveryProps {
	address: any
	receiver: any
	packNumber: any
}

export function DeliveryInProgress({
	address,
	receiver,
	packNumber,
}: DeliveryProps) {
	const router = useRouter()
	return (
		<>
			<TitleBox
				variant="primary"
				icon={<ArrowLeft onClick={() => router.back()} />}
				className="w-full my-2 pr-6">
				reparto en curso
			</TitleBox>

			<div className="w-full h-[45vh] rounded-2xl overflow-hidden my-2">
				<GoogleMap destination={address}></GoogleMap>
			</div>
			<MapDescription
				destiny={address}
				packageNumber={packNumber}
				receiver={receiver}></MapDescription>
			<div className="flex flex-col items-center justify-center">
				<Link href={'/carrier'} className="w-5/6 mt-4">
					<Button
						className="w-full"
						variant="primary"
						onClick={() => message.success('Entrega completada')}>
						FINALIZAR
					</Button>
				</Link>
				<Link href={'/carrier'} className="w-5/6 mt-4">
					<Button
						className="w-full"
						variant="secondary"
						onClick={() => message.success('Entrega cancelada')}>
						CANCELAR ENTREGA
					</Button>
				</Link>
			</div>
		</>
	)
}
