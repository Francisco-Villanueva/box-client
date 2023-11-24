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
import { useState } from 'react'

export default observer(function AdminPackagesPage() {
	const [trimmer, setTrimmer] = useState(6)
	const {
		packages: { deliveredPackages, packagesByDate },
		date: { date_YMD, month, date_DMY },
	} = useStore()

	const DELIVERD_PACKAGES = packagesByDate(deliveredPackages, date_YMD)

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

				<div className="font-roboto text-xs font-medium p-2 bg-white">
					{DELIVERD_PACKAGES.length} paquetes entregados{' '}
				</div>

				<div className="overflow-scroll max-h-[90%] flex flex-col m-auto">
					{DELIVERD_PACKAGES.slice(0, trimmer).map((packages) => (
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
								trimmer === deliveredPackages.length
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
