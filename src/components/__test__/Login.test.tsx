import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { RootStore, RootStoreContext } from 'models/root.store'
import { Login } from '../Login'
import { AuthServices } from 'services'

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(() => ({
		push: jest.fn(),
	})),
}))

describe('Login component', () => {
	const store = RootStore.create({
		users: {},
		packages: {},
		date: { date: new Date() },
	})
	it('renders the login form with expected elements', () => {
		render(
			<RootStoreContext.Provider value={store}>
				<Login />
			</RootStoreContext.Provider>
		)

		const userInput = screen.getByPlaceholderText('Usuario')
		const passwordInput = screen.getByPlaceholderText('Contraseña')
		const loginButton = screen.getByRole('button', { name: /ingresar/i })
		const registerButton = screen.getByRole('link', { name: /crear cuenta/i })
		const forgotPasswordLink = screen.getByText('Olvidé mi contraseña')

		expect(userInput).toBeInTheDocument()
		expect(passwordInput).toBeInTheDocument()
		expect(loginButton).toBeInTheDocument()
		expect(registerButton).toBeInTheDocument()
		expect(forgotPasswordLink).toBeInTheDocument()
	})

	it('disables the login button when inputs are empty', () => {
		render(
			<RootStoreContext.Provider value={store}>
				<Login />
			</RootStoreContext.Provider>
		)

		const loginButton = screen.getByRole('button', { name: /ingresar/i })
		expect(loginButton).toBeDisabled()
	})

	it('enables the login button when inputs have values', () => {
		render(
			<RootStoreContext.Provider value={store}>
				<Login />
			</RootStoreContext.Provider>
		)

		fireEvent.change(screen.getByPlaceholderText('Usuario'), {
			target: { value: 'Testuser' },
		})
		fireEvent.change(screen.getByPlaceholderText('Contraseña'), {
			target: { value: 'Password123' },
		})

		const loginButton = screen.getByRole('button', { name: /ingresar/i })
		expect(loginButton).toBeEnabled()
	})

	it('handles invalid credentials', async () => {
		render(
			<RootStoreContext.Provider value={store}>
				<Login />
			</RootStoreContext.Provider>
		)

		fireEvent.change(screen.getByPlaceholderText('Usuario'), {
			target: { value: 'WrongUser' },
		})
		fireEvent.change(screen.getByPlaceholderText('Contraseña'), {
			target: { value: 'WrongPassword123' },
		})
		fireEvent.click(screen.getByRole('button', { name: /ingresar/i }))

		await waitFor(() => {
			expect(screen.getByText(/Credenciales inválidas/i)).toBeInTheDocument()
		})
	})

	it('handles successful login', async () => {
		jest.spyOn(AuthServices, 'login').mockResolvedValue({
			user: {
				_id: 'fakeID1234',
				name: 'Test',
				lastName: 'User',
				userName: 'Testuser',
				email: 'testuser@mail.com',
				role: 'CARRIER',
				status: 'HABILITADO',
			},
			accessToken: 'fakeAccessToken',
		})
		render(
			<RootStoreContext.Provider value={store}>
				<Login />
			</RootStoreContext.Provider>
		)

		fireEvent.change(screen.getByPlaceholderText('Usuario'), {
			target: { value: 'Testuser' },
		})

		fireEvent.change(screen.getByPlaceholderText('Contraseña'), {
			target: { value: 'Password123' },
		})

		fireEvent.click(screen.getByRole('button', { name: /ingresar/i }))

		await waitFor(() => {
			expect(screen.getByText(/bienvenido Test/i)).toBeInTheDocument()
			expect(localStorage.getItem('USER_TOKEN')).toBe('fakeAccessToken')
		})

		jest.restoreAllMocks()
	})
})
