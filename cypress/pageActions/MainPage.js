class MainPage {
    uploadDocument = (fileName) => {
        cy.contains('Boîte d\'envoi').click()
        cy.contains('Nouvel envoi').children('input').attachFile({ filePath: fileName, encoding: 'base64' })
        cy.contains('1 document a bien été envoyé vers Lifen', { timeout: 10000 }).should('be.visible')
        cy.contains('Finaliser l\'envoi').click()
    }
    verifyDocumentStatus = () => {
        cy.get('tbody>tr').eq(0).children('td').eq(1).invoke('text').should('satisfy', (status) => {
            return status == 'Prêt à l\'envoi' || status == 'À vérifier' ? true : false
        })
    }
}

export default MainPage