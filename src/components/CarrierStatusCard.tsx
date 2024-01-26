'use client'
import { CarrierStatus, Switch, BoxLayout } from 'commons'
import { useStore } from 'models/root.store'
import Image from 'next/image'
import { UserServices } from 'services'
import { User } from 'types'

interface CarrierProps {
	carrier: User
}

export function CarrierStatusCard({ carrier }: CarrierProps) {
	const {
		users: { setUsers },
	} = useStore()

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
					<CarrierStatus status={carrier?.status} />
				</div>
			</section>
			<Switch
				status={carrier.status}
				onChange={async () => {
					try {
						const newState =
							carrier.status === 'HABILITADO' ? 'DESHABILITADO' : 'HABILITADO'
						await UserServices.updateUserStatus(carrier._id, newState)
						const users = await UserServices.getAllUsers()
						setUsers(users)
					} catch (error) {
						console.error(error)
					}
				}}
			/>
		</BoxLayout>
	)
}
