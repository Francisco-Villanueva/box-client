import React from 'react'
interface StatusProps {
	status?: string
}
export function CarrierStatus({ status }: StatusProps) {
	let bgColor = ''
	if (status === 'HABILITADO') {
		bgColor = 'bg-lightGreen'
	} else if (status === 'RECHAZADO') {
		bgColor = 'bg-red-300'
	} else {
		bgColor = 'bg-lightGrey'
	}
	return (
		<>
			<div
				className={`${bgColor} py-[.5] px-2 flex justify-center rounded-md gap-2 w-28`}>
				<p className="text-center text-darkGreen font-roboto font-[500] text-xs uppercase ">
					{status}
				</p>
			</div>
		</>
	)
}
