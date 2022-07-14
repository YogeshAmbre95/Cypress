///<reference types="cypress" />

describe('verify the functionality for Contact Us form', function () {
    beforeEach(function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible').and('have.text', 'CONTACT US')
    })

    it('Verify the functionality for contact us form- sumbit button', function () {
        cy.get('.feedback-input').eq(0).type('yogesh')
        cy.get('input[name="last_name"]').type('ambre')
        cy.get('.feedback-input').eq(2).type('yogeshambre95@gmail.com')
        cy.get('.feedback-input').eq(3).type('I am learning Cypress')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it.only('Verify the contct us form -Reset Button', function () {
        cy.get('.feedback-input').eq(0).type('yogesh')
        cy.get('input[name="last_name"]').type('ambre')
        cy.get('.feedback-input').eq(2).type('yogeshambre95@gmail.com')
        cy.get('.feedback-input').eq(3).type('I am learning Cypress')
        cy.get('input[value="RESET"]').click()
        
        cy.get('input[name="first_name').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('.feedback-input').should('have.text',"")
        cy.get('.feedback-input').should('have.text',"")
    })

    it.only('verify the functionality for contact us form - Invalid Email address',function(){

        cy.get('input[name="first_name"]').type('chinmay')
        cy.get('input[name="last_name"]').type('deshpande')
        cy.get('input[name="email"]').type('chinmaydeshpgmail.com')
        cy.get('textarea[name="message"]').type('I am learning js')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('body').should('contain','Invalid email address')
        
    })
})