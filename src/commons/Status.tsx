import React from 'react'
import { CircleIcon } from './Icons'

interface StatusProps {
	status: StatusString
}

// If you need add new color, modified this line ex; red: "red" || blue: "blue"
const Colors = {
	green: 'green',
	grey: 'grey',
	orange: '#EF7709',
} as const

type Color = keyof typeof Colors

//If you need add status, modified this line
export type StatusString =
	| 'EN CURSO'
	| 'PENDIENTE'
	| 'ENTREGADO'
	| 'NO ASIGNADO'

const STATUSCOLOR: Record<StatusString, Color> = {
	'EN CURSO': 'green',
	PENDIENTE: 'orange',
	ENTREGADO: 'grey',
	'NO ASIGNADO': 'grey',
} as const

export function Status({ status }: StatusProps) {
	const color = STATUSCOLOR[status]

	return (
		<>
			<div
				className={`${
					status === 'ENTREGADO' ? 'bg-[#ace366]' : 'bg-lightGrey'
				} bg-lightGrey py-[.5] px-2 flex items-center rounded-md gap-2`}>
				<div>
					<CircleIcon fill={`${Colors[color]}`} />
				</div>
				<p className="text-center text-darkGreen font-roboto font-[500] text-xs uppercase">
					{status}
				</p>
			</div>
		</>
	)
}
