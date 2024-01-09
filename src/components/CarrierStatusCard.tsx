'use client'
import { CarrierStatus, Switch, BoxLayout } from 'commons'

import Image from 'next/image'
import { useState } from 'react'
import { UserServices } from 'services'
import { User } from 'types'

interface CarrierProps {
	carrier: User
}

export function CarrierStatusCard({ carrier }: CarrierProps) {
	const [updatedUserData, setUpdatedUserData] = useState(carrier)

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
				<div className="w-36">
					<h2 className="font-bold"> {carrier?.name} </h2>
					<CarrierStatus status={updatedUserData?.status} />
				</div>
			</section>
			<Switch
				status={updatedUserData.status}
				onChange={async () => {
					try {
						const newState =
							updatedUserData.status === 'HABILITADO' ? 'DESHABILITADO' : 'HABILITADO'
						const response = await UserServices.updateUserStatus(
							carrier._id,
							newState
						)
						setUpdatedUserData(response.data)
					} catch (error) {
						console.log(error)
					}
				}}
			/>
		</BoxLayout>
	)
}
