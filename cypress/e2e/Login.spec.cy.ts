describe('Login', () => {
	it('should log in successfully with valid credentials', () => {
		/*   const username = process.env.NEXT_PUBLIC_USERNAME;
  const password = process.env.NEXT_PUBLIC_PASSWORD; */
		const username = 'darioberatti'
		const password = 'Dario123'

		cy.visit('localhost:3000/login')

		cy.get('[placeholder="Usuario"]').type(username)
		cy.get('[placeholder="Contraseña"]').type(password)

		cy.get('button').contains('INGRESAR').click()

		cy.contains('Bienvenido Dario')
	})

	it('should display an error message with invalid credentials', () => {
		cy.visit('localhost:3000/login')

		cy.get('[placeholder="Usuario"]').type('invalidUsername')
		cy.get('[placeholder="Contraseña"]').type('invalidPassword')

		cy.get('button').contains('INGRESAR').click()

		cy.contains('Credenciales inválidas')
	})

	it('should login successfully with valid credentials and redirect to /carrier', () => {
		const username = 'darioberatti'
		const password = 'Dario123'

		cy.visit('localhost:3000/login')

		cy.get('[placeholder="Usuario"]').type(username)
		cy.get('[placeholder="Contraseña"]').type(password)

		cy.get('button').contains('INGRESAR').click()

		cy.url().should('include', '/carrier')
	})

	it('should login successfully with valid credentials and redirect to /admin', () => {
		const adminUser = 'Admin'
		const adminPassword = 'Admin123'

		cy.visit('localhost:3000/login')

		cy.get('[placeholder="Usuario"]').type(adminUser)
		cy.get('[placeholder="Contraseña"]').type(adminPassword)

		cy.get('button').contains('INGRESAR').click()

		cy.url().should('include', '/admin')
	})

	it('should redirect to /register when "CREAR CUENTA" is clicked', () => {
		cy.visit('localhost:3000/login')

		cy.get('button').contains('CREAR CUENTA').click()

		cy.url().should('include', '/register')
	})

	it('should redirect to /reset-password when "Olvidé mi contraseña" is clicked', () => {
		cy.visit('localhost:3000/login')

		cy.get('[data-testid="custom-link"]').contains('Olvidé mi contraseña').click()

		cy.url().should('include', '/reset-password')
	})
})
