'use client'
import { ArrowLeft, TitleBox } from 'commons'
import { CarrierStatusCard, ShipmentView } from 'components'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default observer(function CarrierProfile() {
	const {
		users: { selectedCarrier, setUserId },
		date: { setDate },
	} = useStore()

	useEffect(() => {
		if (typeof localStorage !== 'undefined') {
			const storedDate = localStorage.getItem('SELECTED_DATE')

			if (storedDate) {
				const newDate = new Date(storedDate)
				newDate.setDate(newDate.getDate() + 1)

				setDate(newDate)
			}
		}
	}, [])

	if (typeof window !== 'undefined') {
		const selectedUserId = localStorage.getItem('SELECTED_CARRIER_ID')

		if (!selectedCarrier && selectedUserId) {
			setUserId(selectedUserId)
		}
	}

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
			{selectedCarrier ? (
				<CarrierStatusCard carrier={selectedCarrier}></CarrierStatusCard>
			) : null}
			<ShipmentView variant="pending" shipmentTitle="pedidos pendientes" />
			<ShipmentView variant="history" shipmentTitle="historial de pedidos" />
		</div>
	)
})
