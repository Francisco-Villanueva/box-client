'use client'
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
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PackageServices } from 'services'
import { Package } from 'types'

export default observer(function PackagesPage() {
	const router = useRouter()
	const [unassignedPackages, setUnassignedPackages] = useState<Package[]>([])
	useEffect(() => {
		PackageServices.getPackageByStatus('NO ASIGNADO').then((res) => {
			setUnassignedPackages(res.data)
		})
	}, [])

	const [trimmer, setTrimmer] = useState(7)
	const [selectedPackages, setSelectedPackages] = useState<string[]>([])

	const handleTrimmer = () => {
		if (trimmer === unassignedPackages.length) {
			setTrimmer(7)
		} else {
			setTrimmer(unassignedPackages.length)
		}
	}

	const handlePackagesAssignment = () => {
		localStorage.setItem('SELECTED_PACKAGES', selectedPackages.join(','))
		router.push('/carrier/sworn-statement')
	}

	const handleAddPackages = (packId: string) => {
		if (selectedPackages.includes(packId)) {
			setSelectedPackages((prev) => prev.filter((e) => e !== packId))
		} else {
			setSelectedPackages((prev) => [...prev, packId])
		}
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
					{unassignedPackages.length > 0 &&
						unassignedPackages.map((packages: Package) => (
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
				disabled={selectedPackages.length === 0}>
				Iniciar Jornada
			</Button>
		</div>
	)
})
