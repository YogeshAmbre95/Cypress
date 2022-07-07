///<reference types="cypress" />

beforeEach(function () {
    cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
})

describe('To check the checkboxes and radioButtons functionality', function () {
    it('TC-01 By using check()', function () {
        cy.get('input[value="red"]').check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked')
        cy.get('input[value="yellow"]').uncheck().should('not.be.checked')
    })

    it('TC-02 By using click', function () {
        cy.get('input[value="blue"]').click().should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).click().should('be.checked')
        cy.get('input[value="blue"]').click().should('not.be.checked')

    })

    it('TC-03 By using check', function () {
        cy.get('input[type="checkbox"]').each(function (el, index) {
            cy.wrap(el).check().should('be.checked')
        })
    })

    it('TC-04 verify the functionality  to mutiple checkboxes ', function () {
        cy.get('input[type="checkbox"]').check(['red', 'yellow', 'blue', 'orange', 'green', 'purple'])
        cy.get('input[type="checkbox"]').uncheck(['red', 'yellow', 'blue', 'orange', 'green', 'purple'])
    })

    it('TC-05 Verify the functionality for radio with click()',function(){
        
    })
})