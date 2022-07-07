describe('logout the flipkart account',function(){
    it('verify the functionality for logout the flipcart',function(){
        cy.visit('https://www.flipkart.com/account/?rd=0&link=home_account')
        cy.get('._2xm1JU').should('be.visible')
        cy.contains('Login').click().type("9503808298")
        //cy.get('input[type="text"]').type("Mobiles")
    })
})