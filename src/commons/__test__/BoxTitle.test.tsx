import { render, screen } from '@testing-library/react'
import { BoxTitle } from '../BoxTitle'

describe('BoxTitle common', () => {
	const BOX_TITLE_STYLE = {
		variant: {
			top: 'flex flex-col bg-purple justify-center rounded-t-2xl',
			topDate: 'flex bg-purple justify-center rounded-t-2xl',
			bottom: 'flex  bg-white justify-center rounded-b-2xl',
			required: 'flex bg-purple justify-center rounded-md mt-3 ml-3 h-6 w-[30%]',
		},
	}

	it('should render BoxTitle with default variant', () => {
		render(<BoxTitle>Default Variant</BoxTitle>)

		const boxTitleElement = screen.getByText('Default Variant')

		expect(boxTitleElement).toBeInTheDocument()
		expect(boxTitleElement).toHaveClass(BOX_TITLE_STYLE.variant.top)
	})

	it('should render BoxTitle with specified variant', () => {
		render(<BoxTitle variant="bottom">Bottom Variant</BoxTitle>)

		const boxTitleElement = screen.getByText('Bottom Variant')

		expect(boxTitleElement).toBeInTheDocument()
		expect(boxTitleElement).toHaveClass(BOX_TITLE_STYLE.variant.bottom)
	})

	it('should render BoxTitle with custom className', () => {
		render(<BoxTitle className="custom-class">Custom Class</BoxTitle>)

		const boxTitleElement = screen.getByText('Custom Class')

		expect(boxTitleElement).toBeInTheDocument()
		expect(boxTitleElement).toHaveClass('custom-class')
	})
})
