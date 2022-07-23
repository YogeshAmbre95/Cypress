///<reference types ="cypress"/>


describe('verify the shadow DOM element', function () {
    it.skip('verify the shadow DOM element text', function () {
        cy.visit('http://127.0.0.1:5501/cypress/integration/CypressFast/shadow%20dom/index.html')
        cy.get('button').click()
        cy.wait(4000)
        cy.get('div#shadowHost').shadow().find('#name').type('hello')


    })

    it('verify  the book app', function () {

        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('book-app').shadow()
            // .find('.toolbar-bottom')
           


    })
})
