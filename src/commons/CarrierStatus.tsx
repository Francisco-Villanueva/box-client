import React from 'react'
interface StatusProps {
	status?: string
}
export function CarrierStatus({ status }: StatusProps) {
	return (
		<>
			<div
				className={`${
					status === 'HABILITADO' ? 'bg-lightGreen' : 'bg-lightGrey'
				} py-[.5] px-2 flex justify-center rounded-md gap-2 w-28`}>
				<p className="text-center text-darkGreen font-roboto font-[500] text-xs uppercase ">
					{status}
				</p>
			</div>
		</>
	)
}
