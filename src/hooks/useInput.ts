'use client'
import { ChangeEvent, useState } from 'react'
export type InputValidatorType =
	| 'required'
	| 'password'
	| 'email'
	| 'name'
	| 'no required'

export const ERROR_MESSAGES = {
	noRequired: null,
	required: 'Campo requerido',
	email: 'Ingresar un correo electrónico válido',
	name: 'Ingresar un nombre válido',
	passwordLength: 'Debe contener mínimo 6 caracteres',
	passwordRegex: 'Mínimo 1 minúscula, 1 mayúscula y 1 número.',
}

export type ErrorType = keyof typeof ERROR_MESSAGES
export type ErrorMessage = (typeof ERROR_MESSAGES)[keyof typeof ERROR_MESSAGES]

export function validator(type: InputValidatorType) {
	const emailValidator = (value: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!value.match(emailRegex)) {
			return ERROR_MESSAGES.email
		}
		return null
	}

	const nameValidator = (value: string) => {
		const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/
		if (!value.match(nameRegex)) {
			return ERROR_MESSAGES.name
		}
		return null
	}

	const passwordValidator = (value: string) => {
		if (value.length < 6) {
			return ERROR_MESSAGES.passwordLength
		}

		const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/

		if (!regex.test(value)) {
			return ERROR_MESSAGES.passwordRegex
		}

		return null
	}

	const requiredField = (value: string) => {
		if (value.length < 1) {
			return ERROR_MESSAGES.required
		}
		return null
	}

	switch (type) {
		case 'required': {
			return requiredField
		}
		case 'password': {
			return passwordValidator
		}
		case 'email': {
			return emailValidator
		}
		case 'name': {
			return nameValidator
		}
		case 'no required':
			return ERROR_MESSAGES.noRequired
	}
}

interface UseInputProps<T> {
	value: T
	error: ErrorMessage
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	clearInput: () => void
	onBlur: () => void
	onFocus: () => void
}

export default function useInput<T>(
	initialValue: T,
	validationType: InputValidatorType
): UseInputProps<T> {
	const validateFunction = validator(validationType)
	const [value, setValue] = useState(initialValue)
	const [error, setError] = useState<ErrorMessage>(null)

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value as T)
	}

	const clearInput = () => {
		setValue(initialValue)
	}

	const onBlur = () => {
		if (validateFunction) {
			setError(validateFunction(value as string))
		}
	}
	const onFocus = () => {
		setError(null)
	}
	return {
		value,
		onChange,
		error,
		clearInput,
		onBlur,
		onFocus,
	}
}
