'use client'
import { UserImg, Graph, CarrierStatus } from 'commons'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import { useRouter } from 'next/navigation'
import { User } from 'types'

interface CarrierCardProps {
	carrier: User
}

export const CarrierCard = observer(function CarrierCard({
	carrier,
}: CarrierCardProps) {
	const router = useRouter()

	const {
		users: { setUserId },
	} = useStore()
	const packagesDelivered = carrier.packages.filter(
		(pack) => pack.status === 'ENTREGADO'
	)

	const percentage = Math.floor(
		(packagesDelivered.length / carrier.packages.length) * 100
	)

	const handleSelectCarrier = () => {
		setUserId(carrier._id)
		router.push('/admin/carriers/profile')
	}

	return (
		<div
			className="flex items-center justify-between p-4 border-t border-black bg-white"
			key={carrier._id}
			onClick={handleSelectCarrier}>
			<div className="flex items-center gap-4">
				<Graph value={percentage} size="md" />
				<div className="flex flex-col">
					<div className="font-medium text-start text-darkGreen text-md">
						{carrier.name}
					</div>
					{/*
          TODO: ESTE STATUS A QUE HACE REFERENCIA
                    <Status status={status} /> */}
					<CarrierStatus status={carrier.status} />
				</div>
			</div>

			<div className="relative">
				<UserImg src="/users/user1.jpeg" alt="s" className="w-14 h-14" />
			</div>
		</div>
	)
})
