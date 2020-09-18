import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('The authentication form is displayed', () => {
    cy.visit('/')
})

When('User submits wrong credentials', () => {
    cy.url().should('contain', 'login')
    cy.get('#email').type('techmail@example.org')
    cy.get('#password').type('bG9sb2xv')
    cy.get('#continueButton').click()
})

Then('The authentication fails', () => {
    cy.url().should('contain', 'login')
    cy.get('#error-message').should('be.visible')
})