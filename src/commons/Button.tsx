import { MouseEvent, ReactNode } from 'react'

interface ButtonProps {
	body?: ReactNode
	variant?: 'primary' | 'secondary'
	icon?: JSX.Element
	className?: string
	disabled?: boolean
	onClick?: (event: MouseEvent) => void
	children?: ReactNode
	type?: 'button' | 'submit'
}

export function Button({
	children,
	variant = 'primary',
	disabled = false,
	onClick,
	className: additionalClassName = '',
}: ButtonProps) {
	const BUTTON_STYLE = {
		variant: {
			primary: 'bg-darkGreen text-yellow border-darkGreen font-roboto',
			secondary: 'bg-none text-darkGreen border border-darkGreen',
		},
		disabled: {
			primary: 'bg-darkGreen text-yellow border-darkGreen font-roboto opacity-60',
			secondary: 'bg-none text-darkGreen border border-darkGreen  opacity-60',
		},
	}

	const buttonClassName = `rounded-lg px-2 py-1  ${
		disabled
			? `${BUTTON_STYLE.disabled[variant]} `
			: `${BUTTON_STYLE.variant[variant]} `
	} ${additionalClassName}`

	return (
		<button onClick={onClick} disabled={disabled} className={buttonClassName}>
			{children}
		</button>
	)
}
