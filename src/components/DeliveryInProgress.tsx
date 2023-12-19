'use client'
import React from 'react'
import { Button, TitleBox, GoogleMap, MapDescription } from 'commons'
import { ArrowLeft } from 'commons/Icons'
import Link from 'next/link'
import { message } from 'antd'
import { useRouter } from 'next/navigation'
import { PackageServices } from 'services'
import { useStore } from 'models/root.store'

interface DeliveryProps {
	address: string | undefined
	receiver: string | undefined
	packNumber: string | undefined
}

export function DeliveryInProgress({
	address,
	receiver,
	packNumber,
}: DeliveryProps) {
	const {
		packages: { currentPackage },
	} = useStore()
	const router = useRouter()

	const handleCompletedDelivery = () => {
		if (currentPackage)
			PackageServices.udapatePackage(currentPackage._id, {
				...currentPackage,
				status: 'ENTREGADO',
			}).then(() => {
				message.success('Entrega completada')
			})
	}

	return (
		<>
			<TitleBox
				variant="primary"
				icon={<ArrowLeft onClick={() => router.back()} />}
				className="w-full my-2 pr-6">
				reparto en curso
			</TitleBox>
			{/* //TODO: check how store's data arrives this component. If we've undefined, ts
			use "". */}
			<div className="w-full h-[45vh] rounded-2xl overflow-hidden my-2">
				<GoogleMap destination={address || ''}></GoogleMap>
			</div>
			<MapDescription
				destiny={address || ''}
				packageNumber={packNumber || ''}
				receiver={receiver || ''}></MapDescription>
			<div className="flex flex-col items-center justify-center">
				<Link href={'/carrier'} className="w-5/6 mt-4">
					<Button
						className="w-full"
						variant="primary"
						onClick={handleCompletedDelivery}>
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
