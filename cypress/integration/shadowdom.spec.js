///<reference types="cypress"/>

describe('Verify the shadow DOM element', function () {
    it('verify  the book app',function(){
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('book-app')
        .find('app-toolbar')
        .find('input')
        .type('hello')
        
    })
})