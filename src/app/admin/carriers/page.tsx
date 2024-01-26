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
import { CarrierCard } from 'components'
import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import Link from 'next/link'
import Loading from 'app/loading'

export default observer(function CarriersPage() {
	const [trimmer, setTrimmer] = useState(4)
	const {
		users: { carriers },
		date: { month, date_DMY, setDate },
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

	const handleTrimmer = () => {
		if (trimmer === carriers.length) {
			setTrimmer(4)
		} else {
			setTrimmer(carriers.length)
		}
	}

	return (
		<div className="h-[95%] flex flex-col gap-4 justify-between">
			<TitleBox
				variant="primary"
				icon={
					<Link href={'/admin'}>
						<ArrowLeft />
					</Link>
				}
				className="w-full">
				repartidores
			</TitleBox>

			<BoxLayout className="h-[90%]">
				<BoxTitle
					variant="topDate"
					className="justify-between h-[10%] p-6 items-center">
					<Title>{month.toUpperCase()}</Title>
					<Title>{date_DMY}</Title>
				</BoxTitle>

				{/* TODO ver el error de Type en PackageCheckboxCard */}
				<div className="overflow-scroll max-h-[90%] flex flex-col m-auto">
					{!carriers.length ? (
						<Loading />
					) : (
						<>
							{carriers.slice(0, trimmer).map((carrier) => (
								<CarrierCard carrier={carrier} key={carrier._id} />
							))}
						</>
					)}
				</div>
				<BoxTitle variant="bottom" className="h-[10%]">
					<Button
						className="border-none"
						variant="secondary"
						onClick={handleTrimmer}>
						<ShortArrowIcon
							className={`transition-all duration-300 ${
								trimmer === carriers.length ? ' rotate-[90deg]' : ' rotate-[270deg]'
							} w-6`}
						/>
					</Button>
				</BoxTitle>
			</BoxLayout>
		</div>
	)
})
