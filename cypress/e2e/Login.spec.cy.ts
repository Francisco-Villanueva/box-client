import '../support/commands'

describe('Login', () => {
	const baseUrl = Cypress.env('baseUrl')
	const carrier = Cypress.env('carrier')
	const admin = Cypress.env('admin')

	it('should log in successfully with valid credentials', () => {
		cy.visit(`${baseUrl}/login`)

		cy.get('[placeholder="Usuario"]').type(carrier.username)
		cy.get('[placeholder="Contraseña"]').type(carrier.password)

		cy.get('button').contains('INGRESAR').click()

		cy.contains(`Bienvenido ${carrier.name}`)
	})

	it('should display an error message with invalid credentials', () => {
		cy.visit(`${baseUrl}/login`)

		cy.get('[placeholder="Usuario"]').type('invalidUsername')
		cy.get('[placeholder="Contraseña"]').type('invalidPassword')

		cy.get('button').contains('INGRESAR').click()

		cy.contains('Credenciales inválidas')
	})

	it('should login successfully with valid credentials and redirect to /carrier', () => {
		cy.visit(`${baseUrl}/login`)

		cy.get('[placeholder="Usuario"]').type(carrier.username)
		cy.get('[placeholder="Contraseña"]').type(carrier.password)

		cy.get('button').contains('INGRESAR').click()

		cy.url().should('include', '/carrier')
	})

	it('should login successfully with valid credentials and redirect to /admin', () => {
		cy.visit(`${baseUrl}/login`)

		cy.get('[placeholder="Usuario"]').type(admin.username)
		cy.get('[placeholder="Contraseña"]').type(admin.password)

		cy.get('button').contains('INGRESAR').click()

		cy.contains(`Bienvenido ${admin.name}`)
		cy.url().should('include', '/admin')
	})

	it('should redirect to /register when "CREAR CUENTA" is clicked', () => {
		cy.visit(`${baseUrl}/login`)

		cy.get('button').contains('CREAR CUENTA').click()

		cy.url().should('include', '/register')
	})

	it('should redirect to /reset-password when "Olvidé mi contraseña" is clicked', () => {
		cy.visit(`${baseUrl}/login`)

		cy.get('[data-testid="custom-link"]').contains('Olvidé mi contraseña').click()

		cy.url().should('include', '/reset-password')
	})
})
