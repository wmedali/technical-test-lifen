import 'cypress-file-upload';

Cypress.Commands.add('signIn', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#continueButton').click()
})

