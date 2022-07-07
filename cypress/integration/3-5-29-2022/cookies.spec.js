///<reference types="cypress" />
describe('verify the url', function () {
    it.only('handling cookies in cypress', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')


        cy.setCookie('yogesh', 'cypress automation')
        cy.getCookie('yogesh').then(function (obj) {
            cy.log(obj.value)
        })
        cy.setCookie('yogesh', 'update QA testautomation')
        cy.setCookie('yogesh1', 'update QA testautomation2')
        cy.clearCookie('yogesh')
        cy.getCookie('yogesh1').then(function (obj) {
            cy.log(obj.value)

        })
        cy.clearCookies()
        cy.getCookies().should('be.empty')

        cy.window().then(function (win) {
            win.localStorage.setItem('A', 'hello')
        })
        cy.window().then(function (win) {
            win.localStorage.setItem('A', 'hello')
        })
    })
})
