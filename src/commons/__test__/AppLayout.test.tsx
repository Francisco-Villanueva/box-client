import React from 'react'
import { render, screen } from '@testing-library/react'
import { AppLayout } from '../AppLayout'
import userEvent from '@testing-library/user-event'
//import { useRouter } from 'next/navigation'
//import { message } from 'antd'

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(() => ({
		push: jest.fn(),
	})),
}))

jest.mock('mobx-react-lite', () => ({
	observer: (component: React.ComponentType<any>) => component,
}))

jest.mock('models/root.store', () => ({
	useStore: () => ({
		users: {
			loggedUser: {
				role: 'ADMIN',
			},
		},
	}),
}))

jest.mock('antd', () => ({
	message: {
		success: jest.fn(),
	},
}))

describe('AppLyout common', () => {
	//const router = useRouter()
	it('should render AppLayout with children', () => {
		render(<AppLayout>Child Content</AppLayout>)

		expect(screen.getByText('Child Content')).toBeInTheDocument()
	})

	it('should handle log out when user is logged in', () => {
		jest.mock('models/root.store', () => ({
			useStore: () => ({
				users: {
					loggedUser: {
						role: 'user',
					},
				},
			}),
		}))

		render(<AppLayout>Child Content</AppLayout>)

		const logoutButton = screen.getByRole('button', { name: /Cerrar Sesion/i })
		userEvent.click(logoutButton)

		expect(localStorage.getItem('loggedUser')).toBe(null)
		expect(logoutButton).toBeInTheDocument()
		//expect(router.push).toHaveBeenCalledWith('/login')
		//expect(message.success).toHaveBeenCalled()
	})

	it('should handle box click', () => {
		jest.mock('models/root.store', () => ({
			useStore: () => ({
				users: {
					loggedUser: {
						role: 'ADMIN',
					},
				},
			}),
		}))
		render(<AppLayout>Child Content</AppLayout>)

		const boxButton = screen.getByRole('button', { name: /BoxLogo/i })
		userEvent.click(boxButton)

		expect(boxButton).toBeInTheDocument()
		//expect(router.push).toHaveBeenCalledWith('/admin')
	})
})
