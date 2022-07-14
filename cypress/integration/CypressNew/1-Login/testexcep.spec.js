///<reference types="cypress" />


describe('Verify the Test Exceptions',function(){
    it('Create list of your favorite foods',function(){
        cy.visit('https://practicetestautomation.com/practice-test-exceptions/')
        cy.get('#add_btn').click()
        cy.get('row_input').should('have.text','Row 2')
        // cy.get('text').click().type('DumBiryani')
        // cy.get('#save_btn').click()
        // cy.get('#confirmation').should('have.text','Row 2 was saved')
        // cy.get('#remove_btn').then('#confirmation').should('have.text','Row 2 was removed')
    })
})