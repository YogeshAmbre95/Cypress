///<reference types="cypress" />

//********************HOOKS************************ */
// before()
// beforeEach()
// it()
//afterEach()
// after()


describe('hooks in cypress', function () {
    before(function () {
        cy.log('I will run before everything')

    })

    beforeEach(function () {
        cy.log('I will run before each testcase')
    })

    afterEach(function () {
        cy.log('This will run after each testcase')

    })
    after(function () {
        cy.log('This will run after all tescase')
    })
    it('testcase one', function () {
        cy.log('testcase one execution')
    })
    it('testcase two', function () {
        cy.log('testcase two execution')
    })

})