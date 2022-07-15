/// <reference types = "cypress" />

describe('verify the contact us with different data', function () {
    it('same testcase with different data', function () {
        cy.fixture('users').then(function (users) {
            users.forEach(element => {
                cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('input[name="first_name"]').type(element.firstName)
                cy.get('.feedback-input').eq(1).type(element.lastName)
                cy.get('input[name = "email"]').type(element.email)
                cy.get('.feedback-input').last().type(element.message)
                cy.get('.contact_button').last().click()
                cy.get('h1').should('have.text', 'Thank You for your Message!')
            });
        })
    })
})