class PreciseView {
 addRecipient = (recipientName) =>  {
    cy.contains('Ajouter un destinataire').click()
    cy.get('.rbt-input-main').type(recipientName).should('have.value', recipientName)
 }

 verifySearchResult = (fullName, activity, practiceCity) => {
    cy.get('#rbt-menu-item-1 > a > div > div:nth-child(1)').invoke('text').then( displayedName => {
        expect(displayedName.toLowerCase()).eq(fullName.toLowerCase())
    })
    cy.get('#rbt-menu-item-1 > a > div > span').invoke('text').then(displayedActivity => {
        expect(displayedActivity.toLowerCase()).eq(activity.toLowerCase())
    })
    cy.get('#rbt-menu-item-1 > a > div > div.text-capitalize').invoke('text').then(displayedPracticeCity => {
        expect(displayedPracticeCity.toLowerCase()).contain(practiceCity.toLowerCase())
    })
 }
}

export default PreciseView;