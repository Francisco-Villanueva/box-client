'use client'

import { RotatingLines } from 'react-loader-spinner'

export default function Loading() {
	return (
		<div className="flex justify-center items-start h-full">
			<RotatingLines
				strokeColor="grey"
				strokeWidth="5"
				animationDuration="1"
				width="64"
				visible={true}
			/>
		</div>
	)
}
