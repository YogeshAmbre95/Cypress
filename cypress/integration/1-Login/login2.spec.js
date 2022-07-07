///<reference types="cypress" />

describe('Verify the login functionality using login credential',()=>{

    it('verify the login using valid credential',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.get('.post-title').should('have.text','Logged In Successfully')
    })

    it('verify the login fuction using invalid credentials',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
      
        cy.get('#username').type('student')
        cy.get('#password').type('Password1233')
        cy.get('#submit').click()
        cy.get('#error').should('have.text','Your password is invalid!')
        cy.get('#error').contains('Your password is invalid!')
        
    })

})