'use client'
import { Button } from 'commons'
import { ShipmentView } from 'components'
import Link from 'next/link'
import React from 'react'

export default function CarrierHomePage() {
	return (
		<div className="flex flex-col justify-between items-center gap-2 h-full">
			<div className="flex flex-col gap-3 w-full h-max-[50%]">
				<ShipmentView variant="pending" shipmentTitle="repartos pendientes" />
				<ShipmentView variant="history" shipmentTitle="historial de repartos" />
			</div>

			<Link href={'/carrier/packages'} className="w-full flex justify-center">
				<Button className="w-5/6 " variant="primary">
					OBTENER PAQUETES
				</Button>
			</Link>
		</div>
	)
}
