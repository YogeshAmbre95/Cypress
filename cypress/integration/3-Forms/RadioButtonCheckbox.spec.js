///<reference types="cypress" />

describe('Verify the functionality of checkbox, radio Button and Dropdown', function () {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('Verify the functionality for the checkbox', function () {
        cy.get('input[value="option-2"]').should('be.not.checked')
        cy.get('input[value="option-3"]').should('be.checked')
    })
    it('Verify the functionality for the checkbox with click()', function () {
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-1"]').click().should('be.not.checked')
    })

    //check()
    //uncheck()
    it('verify the functionality for the checkbox with check() uncheck() ', function () {
        cy.get('input[value="option-2"]').check().should('be.checked')
        cy.get('input[value="option-2"]').uncheck().should('not.be.checked')
    })

    it('verify the functionality  to mutiple checkboxes ', function () {
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4'])
        cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-3', 'option-4'])
    })

    it('verify the functionality for radio  with click()', function () {
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })
    it('verify the functionality for radio  with check()', function () {
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })

    it('Verify the functionality for all the radio buttons', function () {
        cy.get('#radio-buttons').find('input').each(function (el, index) {
            cy.wrap(el).check().should('be.checked')
        })
        cy.get('#radio-buttons').first().should('not.be.checked')
    })
    // we can select the drop down values by text and by value attribute
    // conventional drop and the select method will work if the tag is select

    it('Verify the functionality for all the radio buttons', function () {
        cy.get('#dropdowm-menu-1').select('Python').should('have.value', 'python')
        cy.get('#dropdowm-menu-1').select('sql').should('have.value', 'sql')
    })

    it.only('Verify the selection for all the dropdown', function () {
        let selectValues = ['python', 'testng', 'javascript']
        cy.get('.section-title').first().children().each(function (el, index) {
            cy.wrap(el).select(selectValues[index]).should('have.value', selectValues[index])
        })
    })
    it.only('verify the functionality to check whether the element is enabled or disabled', function () {
        cy.get('input[value="cabbage"]').should('be.disabled')
    })
    it.only('Verify whether the drop down value is disabled', function () {
        cy.get('#fruit-selects').children()
            .filter('option[disabled="disabled"]')
            .should('have.text', "Orange").and('be.disabled')
    })
})