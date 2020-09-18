import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('A user is successfully authenticated', () => {
    cy.viewport('macbook-13')
    cy.visit('/')
    cy.signIn(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
    cy.url().should('contain', 'app.lifen.fr')
})

When('He submits a document', () => {
    cy.contains('Boîte d\'envoi').click()
    cy.contains('Nouvel envoi').children('input').attachFile({ filePath: 'CR.pdf', encoding: 'base64' })
    cy.contains('1 document a bien été envoyé vers Lifen', { timeout: 10000 }).should('be.visible')
    cy.contains('Finaliser l\'envoi').click()
})

Then('The document is anlysed by AI', () => {
    cy.contains('En cours d\'analyse').should('be.visible')
    cy.wait(4000)
})


Given('A document ready to send in the main list', () => {
    cy.contains('Prêt à l\'envoi').first().click()
})

When('The document recipient is edited', () => {
    cy.contains('Ajouter un destinataire').click()
    cy.get('.rbt-input-main').type('Eclancher William').should('have.value', 'Eclancher William')
    cy.wait(2000)
    cy.get('#rbt-menu-item-1').then($doctor => {
        cy.wrap($doctor).invoke('attr', 'aria-label').should('eq', 'William Eclancher')
        cy.wrap($doctor).click()
    })
})

Then('Document information is updated', () => {
    cy.contains('DESTINATAIRES (2)').should('be.visible')
    cy.contains('ECLANCHER').should('exist')

})