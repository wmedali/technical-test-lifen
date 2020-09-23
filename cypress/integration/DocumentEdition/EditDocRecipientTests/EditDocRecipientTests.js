import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import PreciseView from '../../../pageActions/PreciseView'
import MainPage from '../../../pageActions/MainPage'

const preciseView = new PreciseView()
const mainPage = new MainPage()

before(() => {
    cy.viewport('macbook-13')
    cy.visit('/')
})

Given('An authenticated user uploads a document', () => {
    cy.signIn(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
    cy.url().should('contain', 'app.lifen.fr')
    mainPage.uploadDocument('CR.pdf')
})

And('The document status changes to A vérifier or Prêt à l\'envoi', () => {
    mainPage.verifyDocumentStatus()
})

When('I open precision vue of the document', () => {
    cy.contains('Prêt à l\'envoi').first().click()
})

And('I search for {string} as a new recipient', recipientName => {
    preciseView.addRecipient(recipientName)
})

And('I find it as {string} with speciality {string} in {string}', (fullName, activity, practiceCity) => {
    cy.wait(2000)
    preciseView.verifySearchResult(fullName, activity, practiceCity)
})

Then('I add it as a recipient', () => {
    cy.get('#rbt-menu-item-1').click()
})

And('{string} is added succesfully to the recipients list of the document', (recipientName) => {
    preciseView.verifyRecipientAdded(recipientName)
})