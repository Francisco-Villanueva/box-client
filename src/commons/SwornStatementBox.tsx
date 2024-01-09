'use client'
import React, { useEffect, useState } from 'react'
import { BoxLayout, BoxTitle, Checkbox, Title, Button } from 'commons'

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

	const handleChangeAnswer = () => {
		setShowAnswer(false)
		onSelect('')
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
						{!showAnswer || !selectedValue ? (
							options.map((option) => (
								<div key={option} className="flex flex-row gap-2">
									<Checkbox handleCheck={() => handleCheckboxChange(option)} />
									<div>{option}</div>
								</div>
							))
						) : (
							<div className="flex flex-row items-center gap-10">
								<p>Respuesta: {selectedValue?.toLocaleUpperCase()}</p>
								<Button
									onClick={handleChangeAnswer}
									variant="secondary"
									className="bg-red-100">
									CAMBIAR RESPUESTA
								</Button>
							</div>
						)}
					</div>
				</div>
			</BoxLayout>
		</>
	)
}
