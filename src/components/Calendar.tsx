import { useState } from 'react'
import { addDays } from 'date-fns'

import { BoxTitle, Button, ShortArrowIcon, Title } from 'commons'
import { Week } from './Week'
import { getMonthName } from 'utils'

export const Calendar = () => {
	const [currentWeek, setCurrentWeek] = useState(new Date())
	const [currentMonth, setCurrentMonth] = useState(currentWeek.getMonth())

	const nextWeek = () => {
		setCurrentWeek(addDays(currentWeek, 7))
		setCurrentMonth(addDays(currentWeek, 7).getMonth())
	}

	const prevWeek = () => {
		setCurrentWeek(addDays(currentWeek, -7))
		setCurrentMonth(addDays(currentWeek, -7).getMonth())
	}

	const actualMonth = getMonthName(currentMonth)

	return (
		<>
			<section className="bg-white flex flex-col rounded-2xl">
				<BoxTitle
					variant="topDate"
					className="bg-lightGrey w-full p-2 px-4 rounded-t-2xl ">
					<Title>{actualMonth?.toUpperCase()}</Title>
				</BoxTitle>

				<div className="flex items-center justify-around w-full p-4">
					<Button variant="secondary" onClick={prevWeek}>
						<ShortArrowIcon className="w-4     " />
					</Button>
					<Week currentWeek={currentWeek} />

					<Button variant="secondary" onClick={nextWeek}>
						<ShortArrowIcon className="w-4  rotate-180  " />
					</Button>
				</div>
			</section>
		</>
	)
}
