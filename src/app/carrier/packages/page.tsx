'use client'

import { message } from 'antd'
import {
	ArrowLeft,
	BoxLayout,
	Button,
	TitleBox,
	Title,
	BoxTitle,
	ShortArrowIcon,
} from 'commons'
import { PackageCheckboxCard } from 'components'

import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default observer(function PackagesPage() {
	const {
		packages: { unassignedPackages },
		users: { loggedUser },
	} = useStore()
	const router = useRouter()
	const [trimmer, setTrimmer] = useState(7)
	const [selectedPackages, setSelectedPackages] = useState<string[]>([])
	const [disableButton, setDisableButton] = useState<boolean>(true)

	const handleTrimmer = () => {
		if (trimmer === unassignedPackages.length) {
			setTrimmer(7)
		} else {
			setTrimmer(unassignedPackages.length)
		}
	}

	const handlePackagesAssignment = () => {
		selectedPackages.forEach((packId) => {
			console.log(`Se agrega al ${loggedUser?.name} el paquete: \n  ${packId}`)
		})
		message.success('Paquetes asignados correctamente')

		//TODO: Si el servicio falla, que no haga el push a /carrier, que tire un mensaje de errror
		router.push('/carrier')
	}
	const handleAddPackages = (packId: string) => {
		setSelectedPackages((prev) => [...prev, packId])
		setDisableButton(false)
	}

	return (
		<div className="h-[95%] flex flex-col gap-4 justify-between">
			<TitleBox
				className="w-full"
				icon={
					<Link href={'/carrier'}>
						<ArrowLeft />
					</Link>
				}>
				Obtener Paquetes
			</TitleBox>

			<BoxLayout className="bg-white h-[95%] ">
				<BoxTitle className="h-[10%]">
					<Title>¿Cuántos paquetes repartirás hoy?</Title>
				</BoxTitle>

				<div className="overflow-scroll max-h-[80%] flex flex-col m-auto ">
					{unassignedPackages.slice(0, trimmer).map((packages) => (
						<PackageCheckboxCard
							pack={packages}
							key={packages._id}
							handleAddPackages={handleAddPackages}
						/>
					))}
				</div>

				<BoxTitle variant="bottom" className="h-[10%]">
					<Button
						className="border-none"
						variant="secondary"
						onClick={handleTrimmer}>
						<ShortArrowIcon
							className={`transition-all duration-300 ${
								trimmer === unassignedPackages.length
									? ' rotate-[90deg]'
									: ' rotate-[270deg]'
							} w-6`}
						/>
					</Button>
				</BoxTitle>
			</BoxLayout>

			<Button
				className="w-[90%] uppercase flex m-auto justify-center"
				onClick={handlePackagesAssignment}
				disabled={disableButton}>
				Iniciar Jornada
			</Button>
		</div>
	)
})
