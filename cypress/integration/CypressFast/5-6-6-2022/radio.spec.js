///<reference types="cypress" />

describe('verify the radio button,checkbox,dropdown,enable,disable', function () {
    it('verify the radio function', function () {
        //check()

        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="yellow"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')

        //click()

        cy.get('input[value="blue"]').click().should('be.checked')
        cy.get('input[value="yellow"]').should('not.be.checked')


        //validate every radio

        cy.get('#radio-buttons').find('input').each(function (el) {
            cy.wrap(el).check().should('be.checked')
        })

    })


    it.only('verify the checkbox function', function () {
        //check and uncheck method

        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-3"]').check().should('be.checked')
        cy.get('input[value="option-3"]').uncheck().should('not.be.checked')

        //using click function()
        cy.get('input[value="option-3"]').click().should('be.checked')
        cy.get('input[value="option-3"]').click().should('not.be.checked')
        cy.get('input[value="option-3"]').click().should('be.checked')

        //checking all checkboxes via array as parameter

        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')
        cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-3', 'option-4']).should('not.be.checked')

        cy.get('input[type="checkbox"]').each(function (el) {
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })
})