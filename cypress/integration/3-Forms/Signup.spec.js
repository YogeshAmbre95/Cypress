///<reference types="cypress" />

describe('To verify signUp form functionality',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
    return false
})
it('Tc-01 To test with invalid email',()=>{
    cy.visit("https://www.zoomin.com/sign-up")
    cy.get('[name="name"]').type('Yogesh')
    cy.get('input[type="text"]').eq(1).type('yogeshambre95gmail.com')
    cy.get('[class="number-input"]').type(9503808298)
    cy.get('[class="input-box"]').last().find('input').type('Yogesh123')
    cy.contains('SIGN UP').click()
    cy.get('[role="alert"]').should('contain','Please enter valid Email Address')

})
it('Tc-02 To test with valid credentials',()=>{
    cy.visit("https://www.zoomin.com/sign-up")
    cy.get('[name="name"]').type('Yogesh')
    cy.get('input[type="text"]').eq(1).type('yogeshambre95@gmail.com')
    cy.get('[class="number-input"]').type(9503808298)
    cy.get('[class="input-box"]').last().find('input').type('Yogesh123')
    cy.contains('SIGN UP').click()
    

})
it('Tc-03 To test with invalid name',()=>{
    cy.visit("https://www.zoomin.com/sign-up")
    cy.get('[name="name"]').type('yo')
    cy.get('input[type="text"]').eq(1).type('yogeshambre95@gmail.com')
    cy.get('[class="number-input"]').type(9503808298)
    cy.get('[class="input-box"]').last().find('input').type('Yogesh123')
    cy.contains('SIGN UP').click()
    cy.get('[class="validation-message"]').should('be.visible').and('contain','Name must have minimum three characters.')
})
})
