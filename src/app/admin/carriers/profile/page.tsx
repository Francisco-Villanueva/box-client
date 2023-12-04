'use client'
import { ArrowLeft, TitleBox } from 'commons'
import { CarrierStatusCard, ShipmentView } from 'components'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import Link from 'next/link'
import React from 'react'

export default observer(function CarrierProfile() {
	const {
		users: { selectedCarrier },
	} = useStore()

	return (
		<div className="h-[90%]  flex flex-col gap-2">
			<TitleBox
				className=""
				icon={
					<Link href={'/admin/carriers'}>
						<ArrowLeft className="w-4" />
					</Link>
				}>
				Gestionar pedidos
			</TitleBox>
			{/* TODO Selected carrier no persiste al recargar la pagina */}
			{selectedCarrier ? (
				<CarrierStatusCard carrier={selectedCarrier}></CarrierStatusCard>
			) : null}
			<ShipmentView variant="pending" shipmentTitle="pedidos pendientes" />
			<ShipmentView variant="history" shipmentTitle="historial de pedidos" />
		</div>
	)
})
