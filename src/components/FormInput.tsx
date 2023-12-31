'use client'
import { Input } from 'commons'
import useInput, { InputValidatorType } from 'hooks/useInput'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'

interface FormInputProps {
	placeholder: string
	type: string
	className?: string
	reference: string
	handleInput: (prop: string, value: string) => void
	validation?: InputValidatorType
	isFinish?: boolean
}

export const FormInput = observer(function ({
	placeholder,
	type,
	className = '',
	reference,
	handleInput,
	validation = 'no required',
	isFinish,
}: FormInputProps) {
	const input = useInput('', validation)

	useEffect(() => {
		if (isFinish) {
			input.clearInput()
		} else {
			const value = input.value
			handleInput(reference, value)
		}
	}, [input.value, input.error, isFinish])

	return (
		<Input
			type={type}
			className={` w-full ${className}`}
			placeholder={placeholder}
			{...input}
			error={input.error}
		/>
	)
})
