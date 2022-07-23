///<reference types="cypress"/>

describe('verify the checkboxes',function(){

    Cypress.on ('uncaught:exception', (err, runnable) => { return false; });

    it('verify the mobile checkbox',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('mobile')
        // cy.wait(4500)
        cy.get('#nav-search-submit-button').click()
        // cy.wait(4500)
        cy.get('#brandsRefinements').each(function(el,index){
            cy.wrap(el).find('li').should('have.id','p_89/Samsung')
           
        })
    })
})