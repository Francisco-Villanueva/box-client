'use client'

import {
	ArrowLeft,
	BoxLayout,
	BoxTitle,
	Button,
	ShortArrowIcon,
	Title,
	TitleBox,
} from 'commons'
import { ShipmentCard } from 'components'

import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PackageServices } from 'services'
import { message } from 'antd'

export default observer(function AdminPackagesPage() {
	const [trimmer, setTrimmer] = useState(6)
	const {
		packages: { deliveredPackages, packagesByDate, setPackages },
		date: { month, setDate, date_YMD, date_DMY },
	} = useStore()

	useEffect(() => {
		if (typeof localStorage !== 'undefined') {
			const storedDate = localStorage.getItem('SELECTED_DATE')

			if (storedDate) {
				const newDate = new Date(storedDate)
				newDate.setDate(newDate.getDate() + 1)
				console.log('newDate--->', newDate)

				setDate(newDate)
			}
		}
	}, [])

	const DELIVERD_PACKAGES = packagesByDate(deliveredPackages, date_YMD)
	const deliveredPAckagesToShow = DELIVERD_PACKAGES.filter(
		(pack) => pack.isShownToAdmin
	)

	const handleShowAllPackages = async () => {
		try {
			for (const pack of DELIVERD_PACKAGES) {
				await PackageServices.udapatePackage(pack._id, {
					...pack,
					isShownToAdmin: true,
				})
			}
			message.success('Mostrando todos los paquetes')
			const packages = await PackageServices.getAllPackages()
			setPackages(packages)
		} catch (error) {
			console.error('Error al mostrar todos los paquetes:', error)
			throw error
		}
	}

	const handleTrimmer = () => {
		if (trimmer === deliveredPackages.length) {
			setTrimmer(6)
		} else {
			setTrimmer(deliveredPackages.length)
		}
	}
	return (
		<div className="h-[95%] flex flex-col gap-4 justify-between">
			<TitleBox
				className="w-full"
				icon={
					<Link href={'/admin'}>
						<ArrowLeft />
					</Link>
				}>
				Paquetes
			</TitleBox>

			<BoxLayout className="h-[90%]">
				<BoxTitle
					variant="topDate"
					className="justify-between h-[10%] p-6 items-center">
					<Title>{month.toUpperCase()}</Title>
					<Title>{date_DMY}</Title>
				</BoxTitle>

				<div className="font-roboto text-xs font-medium p-2 bg-white flex items-center justify-between">
					Mostrando {deliveredPAckagesToShow.length} de {DELIVERD_PACKAGES.length}{' '}
					paquetes entregados
					<Button variant="secondary" onClick={handleShowAllPackages}>
						Mostrar todos
					</Button>
				</div>

				<div className="overflow-scroll max-h-[90%] flex flex-col m-auto">
					{deliveredPAckagesToShow.slice(0, trimmer).map((packages) => (
						<ShipmentCard pack={packages} key={packages._id} />
					))}
				</div>

				<BoxTitle variant="bottom" className="h-[10%]">
					<Button
						className="border-none"
						variant="secondary"
						onClick={handleTrimmer}>
						<ShortArrowIcon
							className={`transition-all duration-300 ${
								trimmer === deliveredPAckagesToShow.length
									? ' rotate-[90deg]'
									: ' rotate-[270deg]'
							} w-6`}
						/>
					</Button>
				</BoxTitle>
			</BoxLayout>
		</div>
	)
})
