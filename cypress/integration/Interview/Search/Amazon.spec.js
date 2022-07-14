
    describe('test', function () {
        it('verify the search tab', function () {
            cy.visit('https://www.amazon.in/')
            cy.get('#twotabsearchtextbox').type('iphone')
            cy.get('.autocomplete-results-container').find('.s-suggestion').each(function (el) {
                cy.wrap(el).invoke('text').then(function (txt) {
                    cy.log(txt.trim())
                    if (txt.trim() == "one 11 cover") {
                        cy.wrap(el).click()

                    }
                })
            })


        })
    })