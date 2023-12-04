'use client'
import { CarrierStatus, Switch, BoxLayout } from 'commons'

import Image from 'next/image'
import { User } from 'types'

interface CarrierProps {
	carrier: User
}

export function CarrierStatusCard({ carrier }: CarrierProps) {
	return (
		<BoxLayout className="bg-white p-4 flex items-center justify-between">
			<section className="flex items-center gap-4">
				<Image
					src={carrier.image ? carrier.image : '/users/user1.jpeg'}
					alt="a"
					width={90}
					height={1}
					className="rounded-2xl"
				/>
				<div>
					<h2 className="font-bold"> {carrier?.name} </h2>
					<CarrierStatus status={carrier?.status} />
				</div>
			</section>
			<Switch
				status={carrier.status}
				//TODO Funcionalidad de toggle en switch
				onChange={() => {
					console.log('SWITCH STATE OF CARRIER')
				}}
			/>
		</BoxLayout>
	)
}
