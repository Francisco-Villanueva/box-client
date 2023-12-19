'use client'
import React, { useEffect, useState } from 'react'
import { BoxLayout, BoxTitle, Checkbox, Title } from 'commons'

interface SwornStatementBoxProps {
	question: string
	options: string[]
	onSelect: (value: string) => void
	selectedValue: string | null
}

export function SwornStatementBox({
	question,
	options,
	onSelect,
	selectedValue,
}: SwornStatementBoxProps) {
	const [showAnswer, setShowAnswer] = useState(false)

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | null = null

		if (selectedValue) {
			timeoutId = setTimeout(() => {
				setShowAnswer(true)
			}, 500)
		}

		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId)
			}
		}
	}, [selectedValue])

	const handleCheckboxChange = (value: string) => {
		setShowAnswer(false)
		onSelect(value)
	}

	return (
		<>
			<BoxLayout className="bg-white h-[30%]">
				<BoxTitle variant="required">
					<Title>Requerido *</Title>
				</BoxTitle>
				<div className="flex flex-col items-center">
					<div className="font-roboto bg-white text-darkGreen w-[85%] p-3 border-b-2 text-center text-lg">
						{question}
					</div>
					<div className="flex flex-row gap-20 pt-3 mb-3">
						{!showAnswer || !selectedValue ? ( //VER ESTYOOOO
							options.map((option) => (
								<div key={option} className="flex flex-row gap-2">
									<Checkbox handleCheck={() => handleCheckboxChange(option)} />
									<div>{option}</div>
								</div>
							))
						) : (
							<p>Respuesta: {selectedValue?.toLocaleUpperCase()}</p>
						)}
					</div>
				</div>
			</BoxLayout>
		</>
	)
}
