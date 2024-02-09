import React from 'react'
import { ProgressCircle } from '@tremor/react'

const sizeVariant = ['xs', 'sm', 'md', 'lg', 'xl'] as const

interface GraphProps {
	value: number
	size?: (typeof sizeVariant)[number]
}

export function Graph({ value, size }: GraphProps) {
	value = Math.floor(value)
	return (
		<ProgressCircle value={value} size={size} className="relative">
			<div className="text-lg text-darkGreen font-medium ">{`${value}%`}</div>
		</ProgressCircle>
	)
}
