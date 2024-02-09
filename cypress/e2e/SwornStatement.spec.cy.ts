describe('Sworn Statement', () => {
	const baseUrl = Cypress.env('baseUrl')
	const carrier = Cypress.env('carrier')
	beforeEach(() => {
		cy.visit(`${baseUrl}/login`)
		cy.get('[placeholder="Usuario"]').type(carrier.username)
		cy.get('[placeholder="Contraseña"]').type(carrier.password)

		cy.get('button').contains('INGRESAR').click()

		cy.visit(`${baseUrl}//carrier/sworn-statement`)
	})

	it('should have disabled buttons for incomplete answers', () => {
		cy.contains('Declaración Jurada').should('be.visible')
		cy
			.contains('¿Ha consumido bebidas alcohólicas en las últimas 12 horas?')
			.should('be.visible')
		cy
			.contains('¿Usted está haciendo uso de algún medicamento psicoactivo?')
			.should('be.visible')
		cy
			.contains(
				'¿Tiene usted algún problema familiar, emocional o de cualquier tipo que lo distraiga?'
			)
			.should('be.visible')

		cy.get('button').contains('Borrar respuestas').should('be.disabled')

		cy.get('button').contains('Continuar').should('be.disabled')
	})
})
