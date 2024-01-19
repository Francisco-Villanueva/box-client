import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Button common', () => {
	it('should render primary button with children', () => {
		render(<Button variant="primary">Primary Button</Button>)

		const buttonElement = screen.getByText('Primary Button')

		expect(buttonElement).toBeInTheDocument()
		expect(buttonElement).toHaveClass('bg-darkGreen')
		expect(buttonElement).toHaveClass('text-yellow')
		expect(buttonElement).not.toHaveClass('bg-none')
	})

	it('should render secondary button with children', () => {
		render(<Button variant="secondary">Secondary Button</Button>)

		const buttonElement = screen.getByText('Secondary Button')

		expect(buttonElement).toBeInTheDocument()
		expect(buttonElement).toHaveClass('bg-none')
		expect(buttonElement).not.toHaveClass('text-yellow')
	})

	it('should render disabled button with children', () => {
		render(<Button disabled>Disabled Button</Button>)

		const buttonElement = screen.getByText('Disabled Button')

		expect(buttonElement).toBeInTheDocument()
		expect(buttonElement).toHaveClass('opacity-60')
		expect(buttonElement).toHaveAttribute('disabled')
	})

	it('should call onClick callback when clicked', () => {
		const handleClick = jest.fn()

		render(<Button onClick={handleClick}>Clickable Button</Button>)

		const buttonElement = screen.getByText('Clickable Button')

		fireEvent.click(buttonElement)

		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
