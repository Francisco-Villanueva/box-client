import { render, screen } from '@testing-library/react'
import { BoxLayout } from '../BoxLayout'

describe('BoxLayout common', () => {
	it('should render BoxLayout with children', () => {
		render(<BoxLayout>Child Content</BoxLayout>)

		const boxLayoutElement = screen.getByText('Child Content')

		expect(boxLayoutElement).toBeInTheDocument()
		expect(boxLayoutElement).toHaveClass('rounded-2xl')
		expect(boxLayoutElement).toHaveClass('shadow-sm')
	})

	it('should render BoxLayout with additional className', () => {
		render(<BoxLayout className="custom-class">Custom Class Content</BoxLayout>)

		const boxLayoutElement = screen.getByText('Custom Class Content')

		expect(boxLayoutElement).toBeInTheDocument()
		expect(boxLayoutElement).toHaveClass('rounded-2xl')
		expect(boxLayoutElement).toHaveClass('shadow-sm')
		expect(boxLayoutElement).toHaveClass('custom-class')
	})
})
