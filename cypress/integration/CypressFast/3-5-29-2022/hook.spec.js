///<reference types="cypress" />

//********************HOOKS************************ */
// before()
// beforeEach()
// it()
//afterEach()
// after()

describe('verify the function of hooks',function(){
    before(function(){
        cy.log('before everything.....I am before block')
    })

    beforeEach(function(){
        cy.log('I am before each testcase....I am before each block')
    })
    it('verify the testcase one',function(){
        cy.log('Test case one')
    })
    it('Verify the test case two',function(){
        cy.log('Test case two')
    })
    afterEach(function(){
        cy.log('After each block ....')
    })
    after(function(){
        cy.log('After all block .....')
    })

    
})