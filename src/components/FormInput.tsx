'use client'
import { Input } from 'commons'
import useInput, { InputValidatorType } from 'hooks/useInput'
import React, { useEffect } from 'react'

interface FormInputProps {
	placeholder: string
	type: string
	className?: string
	reference: string
	handleInput: (prop: string, value: string, error: any) => void
	validation?: InputValidatorType
	isFinish?: boolean
}

export function FormInput({
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
			const error = input.error
			handleInput(reference, value, error)
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
}
