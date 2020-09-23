import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

before(() => {
    cy.viewport('macbook-13')
    cy.visit('/')
})

Given('An authenticated user uploads a document', () => {
    cy.signIn(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
    cy.url().should('contain', 'app.lifen.fr')
    cy.contains('Boîte d\'envoi').click()
    cy.contains('Nouvel envoi').children('input').attachFile({ filePath: 'CR.pdf', encoding: 'base64' })
    cy.contains('1 document a bien été envoyé vers Lifen', { timeout: 10000 }).should('be.visible')
    cy.contains('Finaliser l\'envoi').click()
})

And('The document status changes to A vérifier or Prêt à l\'envoi', () => {
    cy.contains('En cours d\'analyse').should('be.visible')
    cy.get('tbody>tr').eq(0).children('td').eq(1).invoke('text').should('satisfy', (status) => {
        return status == 'Prêt à l\'envoi' || status == 'À vérifier' ? true : false
    })
})

When('I open precision vue of the document', () => {
    cy.contains('Prêt à l\'envoi').first().click()
})

And('I search for {string} as a new recipient', recipientName => {
    cy.contains('Ajouter un destinataire').click()
    cy.get('.rbt-input-main').type(recipientName).should('have.value', recipientName)
})

And('I find it as {string} with speciality {string} in {string}', (fullName, activity, practiceCity) => {
    cy.wait(2000)
    cy.get('#rbt-menu-item-1 > a > div > div:nth-child(1)').invoke('text').then( displayedName => {
        expect(displayedName.toLowerCase()).eq(fullName.toLowerCase())
    })
    cy.get('#rbt-menu-item-1 > a > div > span').invoke('text').then(displayedActivity => {
        expect(displayedActivity.toLowerCase()).eq(activity.toLowerCase())
    })
    cy.get('#rbt-menu-item-1 > a > div > div.text-capitalize').invoke('text').then(displayedPracticeCity => {
        expect(displayedPracticeCity.toLowerCase()).contain(practiceCity.toLowerCase())
    })
})

Then('I add it as a recipient', () => {
    cy.get('#rbt-menu-item-1').click()
})

And('It is added succesfully to the recipients list of the doc', () => {
    cy.contains('DESTINATAIRES (2)').should('be.visible')
    cy.contains('ECLANCHER').should('exist')
})