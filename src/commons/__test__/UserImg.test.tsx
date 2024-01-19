import { render, screen } from '@testing-library/react'
import { UserImg } from '../UserImg'

describe('UserImg common', () => {
	it('renders UserImg common with provided src and alt', () => {
		const testSrc = 'https://test-image.jpg'
		const testAlt = 'Test Alt Text'

		render(<UserImg src={testSrc} alt={testAlt} />)

		const imgElement = screen.getByAltText(testAlt)

		expect(imgElement).toBeInTheDocument()
		expect(imgElement).toHaveAttribute('src')
	})

	it('applies custom className if provided', () => {
		const testSrc = 'https://test-image.jpg'
		const testAlt = 'Test Alt Text'
		const testClassName = 'custom-class'

		render(<UserImg src={testSrc} alt={testAlt} className={testClassName} />)

		const container = screen.getByText('', { selector: '.custom-class' })

		expect(container).toHaveClass(testClassName)
	})

	it('renders children inside the UserImg component', () => {
		const testSrc = 'https://test-image.jpg'
		const testAlt = 'Test Alt Text'

		render(
			<UserImg src={testSrc} alt={testAlt}>
				<span>Child Content</span>
			</UserImg>
		)

		const childElement = screen.getByText('Child Content')

		expect(childElement).toBeInTheDocument()
	})
})
