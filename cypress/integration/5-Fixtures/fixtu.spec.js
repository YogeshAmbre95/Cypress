

describe('verify the functionality for contactus form', function () {
    it.only('verify the contact us form from fixture file in particular testcase', function () {


        cy.fixture('contactus').then(function (res) {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name = "first_name"]').type(res.firstName)
            cy.get('input[name = "last_name"]').type(res.lastName)
            cy.get('input[name = "email"]').type(res.email)
            cy.get('textarea[name = "message"]').type(res.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

})
})