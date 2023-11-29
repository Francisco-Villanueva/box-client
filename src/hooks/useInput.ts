'use client'
import { ChangeEvent, useState } from 'react'
export type InputValidatorType =
	| 'required'
	| 'password'
	| 'email'
	| 'name'
	| 'no required'
	| 'weight'
	| 'address'
	| 'userName'

export const ERROR_MESSAGES = {
	noRequired: null,
	required: 'Campo requerido',
	email: 'Ingresar un correo electrónico válido',
	name: 'Ingresar un nombre válido',
	passwordLength: 'Debe contener mínimo 6 caracteres',
	passwordRegex: 'Mínimo 1 minúscula, 1 mayúscula y 1 número.',
	weight: 'Ingresar un peso válido',
	address: 'Ingresar una dirección válida',
	userName: 'El usuario solo puede contener letras y números',
}

export type ErrorType = keyof typeof ERROR_MESSAGES
export type ErrorMessage = (typeof ERROR_MESSAGES)[keyof typeof ERROR_MESSAGES]

export function validator(type: InputValidatorType) {
	const emailValidator = (value: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!value.match(emailRegex) && value) {
			return ERROR_MESSAGES.email
		}
		return null
	}

	const nameValidator = (value: string) => {
		const nameRegex = /^\s*[a-zA-Z]+(?: [a-zA-Z]+)*\s*$/
		if (!value.match(nameRegex) && value) {
			return ERROR_MESSAGES.name
		}
		return null
	}

	const passwordValidator = (value: string) => {
		if (value.length < 6 && value) {
			return ERROR_MESSAGES.passwordLength
		}

		const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/

		if (!regex.test(value) && value) {
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

	const weightValidator = (value: string) => {
		const numberRegex = /^[0-9]+$/
		if (!value.match(numberRegex) && value) {
			return ERROR_MESSAGES.weight
		}
		return null
	}

	const addressValidator = (value: string) => {
		const addressRegex = /^[a-zA-Z0-9\s.,#-]+$/
		if (!value.match(addressRegex) && value) {
			return ERROR_MESSAGES.address
		}
		return null
	}

	const userNameValidator = (value: string) => {
		const trimmedUserName = value.trim()
		const userNameRegex = /^[a-zA-Z0-9]+$/
		if (!trimmedUserName.match(userNameRegex) && value) {
			return ERROR_MESSAGES.userName
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
		case 'weight': {
			return weightValidator
		}
		case 'address': {
			return addressValidator
		}
		case 'userName': {
			return userNameValidator
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
