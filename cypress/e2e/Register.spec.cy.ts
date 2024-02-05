describe('RegisterForm', () => {
	const baseUrl = Cypress.env('baseUrl')
	const validUser = {
		name: 'John',
		lastName: 'Doe',
		userName: 'johndoe',
		email: 'john@example.com',
		password: 'Password123',
		confirmPassword: 'Password123',
	}

	it('should register successfully with valid data', () => {
		cy.visit(`${baseUrl}/register`)

		cy.get('[placeholder="Nombre"]').type(validUser.name)
		cy.get('[placeholder="Apellido"]').type(validUser.lastName)
		cy.get('[placeholder="Usuario"]').type(validUser.userName)
		cy.get('[placeholder="Email"]').type(validUser.email)
		cy.get('[placeholder="Contraseña"]').type(validUser.password)
		cy.get('[placeholder="Confirmar Contraseña"]').type(validUser.confirmPassword)

		cy.get('button').contains('CREAR').click()

		cy.url().should('include', '/login')

		cy.contains('Usuario creado correctamente')
	})

	it('should log in successfully with registered user', () => {
		cy.visit(`${baseUrl}/login`)

		cy.get('[placeholder="Usuario"]').type(validUser.userName)
		cy.get('[placeholder="Contraseña"]').type(validUser.password)

		cy.get('button').contains('INGRESAR').click()

		cy.contains(`Bienvenido ${validUser.name}`)
	})

	it('should display error message when username/email already exists', () => {
		cy.visit(`${baseUrl}/register`)

		cy.get('[placeholder="Nombre"]').type(validUser.name)
		cy.get('[placeholder="Apellido"]').type(validUser.lastName)
		cy.get('[placeholder="Usuario"]').type(validUser.userName)
		cy.get('[placeholder="Email"]').type(validUser.email)
		cy.get('[placeholder="Contraseña"]').type(validUser.password)
		cy.get('[placeholder="Confirmar Contraseña"]').type(validUser.confirmPassword)

		cy.get('button').contains('CREAR').click()

		cy.contains('Error al registar el usuario:')
	})

	it('should have disabled button for incomplete fields', () => {
		cy.visit(`${baseUrl}/register`)

		cy.get('button').contains('CREAR').should('be.disabled')

		cy.get('[placeholder="Nombre"]').type(validUser.name)
		cy.get('[placeholder="Apellido"]').type(validUser.lastName)
		cy.get('[placeholder="Usuario"]').type(validUser.userName)

		cy.get('button').contains('CREAR').should('be.disabled')

		cy.get('[placeholder="Email"]').type(validUser.email)
		cy.get('[placeholder="Contraseña"]').type(validUser.password)
		cy.get('[placeholder="Confirmar Contraseña"]').type(validUser.confirmPassword)

		cy.get('button').contains('CREAR').should('not.be.disabled')
	})

	it('should display error message for mismatched passwords', () => {
		cy.visit(`${baseUrl}/register`)

		cy.get('[placeholder="Nombre"]').type(validUser.name)
		cy.get('[placeholder="Apellido"]').type(validUser.lastName)
		cy.get('[placeholder="Usuario"]').type(validUser.userName)
		cy.get('[placeholder="Email"]').type(validUser.email)
		cy.get('[placeholder="Contraseña"]').type(validUser.password)
		cy.get('[placeholder="Confirmar Contraseña"]').type('mismatchedPassword')

		cy.get('button').contains('CREAR').click()

		cy.contains('Las contraseñas no coinciden')
	})

	it('should redirect to /login when "¿Ya tenés una cuenta?" is clicked', () => {
		cy.visit(`${baseUrl}/register`)

		cy
			.get('[data-testid="custom-link"]')
			.contains('¿Ya tenés una cuenta?')
			.click()

		cy.url().should('include', '/login')
	})
})
