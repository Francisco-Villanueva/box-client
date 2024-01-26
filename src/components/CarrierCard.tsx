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
		date: { date_YMD },
		packages: { packagesByDate },
	} = useStore()

	const packagesDelivered = carrier.packages.filter(
		(pack) => pack.status === 'ENTREGADO'
	)

	const selectedDateDeliveredPackages = packagesByDate(
		packagesDelivered,
		date_YMD
	)
	const selectedDateTotalPackages = packagesByDate(carrier.packages, date_YMD)

	let percentage
	if (selectedDateTotalPackages.length > 0) {
		percentage =
			(selectedDateDeliveredPackages.length / selectedDateTotalPackages.length) *
			100
	} else {
		percentage = 0
	}

	// TODO Esta parte tira errores de indentacion
	// const percentage =
	// 	selectedDateTotalPackages.length > 0
	// 		? Math.floor(
	// 				(selectedDateDeliveredPackages.length / selectedDateTotalPackages.length) *
	// 					100
	// 		  )
	// 		: 0

	const handleSelectCarrier = () => {
		setUserId(carrier._id)
		localStorage.setItem('SELECTED_CARRIER_ID', carrier._id)
		router.push('/admin/carriers/profile')
	}

	const userImage = carrier?.image

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
					<CarrierStatus status={carrier.status} />
				</div>
			</div>

			<div className="relative">
				<UserImg
					src={userImage ? userImage : '/users/user1.jpeg'}
					alt="s"
					className="w-14 h-14"
				/>
			</div>
		</div>
	)
})
