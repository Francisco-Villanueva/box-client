'use client'
import { AddIcon, Button, Title } from 'commons'
import { Calendar, DetailView } from 'components'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import Image from 'next/image'
import Link from 'next/link'
import { useValidateUser } from 'utils'

export default observer(function AdminPage() {
	const {
		users: { loggedUser },
	} = useStore()

	useValidateUser('ADMIN')

	return (
		<div className="flex flex-col justify-between gap-2 h-full">
			<section className="bg-white  flex items-center gap-2  p-4  rounded-2xl">
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
					<Title>Hola Admin!</Title>
					<span>Estos son los pedidos del dia</span>
				</div>
			</section>

			<Calendar />

			<DetailView />

			<Link href={'/admin/packages/create'} className="w-full flex justify-center">
				<Button className="w-5/6 ">
					<span className="flex justify-center items-center   gap-2 ">
						Nuevo Paquete
						<AddIcon className="w-4" />
					</span>
				</Button>
			</Link>
		</div>
	)
})
