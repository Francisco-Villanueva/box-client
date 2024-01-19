import { render, screen } from '@testing-library/react'
import { Title } from '../Title'

describe('Title common', () => {
	it('should render children with one word', () => {
		const testTitle = 'Title'
		//Arrange:
		render(<Title>{testTitle}</Title>)
		//Act:
		const el = screen.getByText('Title')
		//Assertion
		expect(el).toBeInTheDocument()
		expect(el.tagName).toBe('P')
	})

	it('should render children with more than one word', () => {
		const testTitle = 'More than one world'
		render(<Title>{testTitle}</Title>)

		const el = screen.getByText('More than one world')

		expect(el).toBeInTheDocument()
	})
})
