import useModal from 'hooks/useModal'
import { TitleBox, BoxLayout, ShortArrowIcon } from 'commons'
import { ShipmentCard } from 'components'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'

interface ShipmentProps {
	variant?: 'pending' | 'history'
	shipmentTitle: string
}

export const ShipmentView = observer(function ({
	variant,
	shipmentTitle,
}: ShipmentProps) {
	const {
		users: {
			loggedUserPendingPackages,
			loggedUserDeliveredPackages,
			loggedUser,
			selectedCarrierDeliveredPackages,
			selectedCarrierPendingPackages,
		},
		date: { date_YMD, date_DMY },
		packages: { packagesByDate },
	} = useStore()

	const isCarrier = loggedUser?.role === 'CARRIER'
	const isAdmin = loggedUser?.role === 'ADMIN'

	const packs = (() => {
		switch (true) {
			case isCarrier && variant === 'pending':
				return loggedUserPendingPackages
			case isCarrier && variant !== 'pending':
				return loggedUserDeliveredPackages
			case isAdmin && variant === 'pending':
				return selectedCarrierPendingPackages
			default:
				return packagesByDate(selectedCarrierDeliveredPackages || [], date_YMD)
		}
	})()

	const packsToShow = packs?.filter((pack) =>
		isCarrier ? pack.isShownToCarrier : pack.isShownToAdmin
	)

	const { isModalOpen, toggleModal } = useModal()

	return (
		<BoxLayout className="bg-white">
			<TitleBox
				className={`${isModalOpen && 'rounded-b-none'}`}
				subtitle={packs?.length ? '' : 'Sin repartos'}
				onClick={toggleModal}
				date={variant === 'history' && isAdmin ? date_DMY : undefined}
				icon={
					<ShortArrowIcon
						className={`w-4 transition-all duration-150 ${
							isModalOpen ? 'rotate-[270deg]' : 'rotate-180'
						}`}
					/>
				}>
				{shipmentTitle}
			</TitleBox>

			{isModalOpen && packs?.length ? (
				<section className="p-2 overflow-scroll h-max-[20%]">
					{variant === 'history' ? (
						<div>
							<div className="font-roboto text-xs font-medium p-2 flex justify-between">
								<div>{`${packs?.length} paquete(s) entregado(s)`}</div>
								<div>{`${packs.length - (packsToShow?.length || 0)} ocultado(s)`}</div>
							</div>
							<hr></hr>
						</div>
					) : null}
					{packsToShow?.map((pack) => <ShipmentCard pack={pack} key={pack._id} />)}
				</section>
			) : null}
		</BoxLayout>
	)
})
