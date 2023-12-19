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
				return selectedCarrierDeliveredPackages
		}
	})()

	const { isModalOpen, toggleModal } = useModal()

	return (
		<BoxLayout className="bg-white">
			<TitleBox
				className={`${isModalOpen && 'rounded-b-none'}`}
				subtitle={packs?.length ? '' : 'Sin repartos'}
				onClick={toggleModal}
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
							<div className="font-roboto text-xs font-medium p-2">
								{`${packs?.length} paquetes entregados`}
							</div>
							<hr></hr>
						</div>
					) : null}
					{packs?.map((pack) => <ShipmentCard pack={pack} key={pack._id} />)}
				</section>
			) : null}
		</BoxLayout>
	)
})
