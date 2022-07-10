/// <reference types= "cypress"/>

import Object from "../../fixtures/contactus.json"

let data = undefined
before(function () {
    cy.fixture('contactus').then((res) => {
        cy.log(res)
        data = res
    })
})


describe('verify the functionality for contactus form', function () {
    it('verify the functionality for contactus form', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type('yogesh')
        cy.get('input[name = "last_name"]').type('ambre')
        cy.get('input[name = "email"]').type('yogambre@gmail.com')
        cy.get('textarea[name = "message"]').type('hello i am learning javascript')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })


    it('verify the functionality for contact us form', function () {

        let info = {

            first_name: "yogesh",
            last_name: "ambre",
            email: "yogesh95@gmail.com",
            message: "Hello I am learning JS"

        }
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(info.first_name)
        cy.get('input[name = "last_name"]').type(info.last_name)
        cy.get('input[name = "email"]').type(info.email)
        cy.get('textarea[name = "message"]').type(info.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it.only('verify the contact us form from fixture file in particular testcase', function () {

        //refer import command top of the describe block

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

    it('verify the contact us form from fixture - BeforeEach', function () {

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(data.firstName)
        cy.get('input[name = "last_name"]').type(data.lastName)
        cy.get('input[name = "email"]').type(data.email)
        cy.get('textarea[name = "message"]').type(data.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')


    })

    it('verify the contact us form from fixture - Import', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(Object.firstName)
        cy.get('input[name = "last_name"]').type(Object.lastName)
        cy.get('input[name = "email"]').type(Object.email)
        cy.get('textarea[name = "message"]').type(Object.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })
})
