/// <reference types="cypress" />

describe('verify the UI', function () {
    it.skip('verify the number of Todo', function () {
        cy.visit('http://localhost:1234')
        cy.get('.todo').should('have.length', 54)
    })

    it('add new to do', function () {
        let text = 'Cypress new'
        cy.visit('http://localhost:1234/')
        cy.get('.new-todo').type(text)
        cy.get('.new-todo').type(`{enter}`)
        cy.wait(5000)
        cy.reload()
        cy.get('.todo').last().should('have.text', text)
    })

    it.skip('update existing todo', function () {
        cy.visit('http://localhost:1234/')
        cy.get('.todo').first().find('div').find('input').click()
        cy.get('.todo').first().should('have.class', 'todo completed')
    })

    it.only('delete', function () {
        cy.visit('http://localhost:1234/')
        cy.get('.destroy').first().click({ force: true })

    })
})