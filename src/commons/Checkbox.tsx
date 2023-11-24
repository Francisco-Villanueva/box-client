'use client'
import { useState } from 'react'
import { ChcekIcon } from './Icons'

interface Props {
	handleCheck: () => void
}
export function Checkbox({ handleCheck }: Props) {
	const [check, setCheck] = useState(false)
	const CHECKED_STYLE = 'bg-yellow text-darkGreen '
	const UNCHECKED_STYLE = 'bg-none border border-darkGreen border-2'
	const handleCheckbox = () => {
		setCheck(!check)
		handleCheck()
	}
	return (
		<div
			onClick={handleCheckbox}
			className={` transition-colors duration-200  grid place-items-center w-6 h-6 rounded-full ${
				check ? CHECKED_STYLE : UNCHECKED_STYLE
			}`}>
			{check ? <ChcekIcon className="w-2/3" /> : null}
		</div>
	)
}
