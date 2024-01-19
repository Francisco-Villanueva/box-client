'use client'
import { Button, Title } from 'commons'
import { ShipmentView } from 'components'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import Image from 'next/image'
import Loading from 'app/loading'
import { UserServices } from 'services'

export default observer(function CarrierHomePage() {
	const {
		users: { loggedUser, setUserLogged },
	} = useStore()

	useEffect(() => {
		if (loggedUser) {
			UserServices.getUserById(loggedUser._id).then((res) => {
				setUserLogged(res.data)
			})
		}
	}, [loggedUser])

	return (
		<div className="flex flex-col justify-between items-center gap-2 h-full">
			<div className="flex flex-col gap-3 w-full h-max-[50%]">
				<section className="bg-white  flex items-center gap-2  p-4  rounded-2xl">
					{loggedUser ? (
						<>
							<Image
								src={
									loggedUser && loggedUser.image ? loggedUser.image : '/users/user1.jpeg'
								}
								alt="s"
								width={100}
								height={100}
								className="rounded-2xl "
							/>

							<div>
								<Title>Hola {loggedUser?.name || 'Usuario'}!</Title>
								<span>Estos son los pedidos del dia</span>
							</div>
						</>
					) : (
						<Loading />
					)}
				</section>
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
})
