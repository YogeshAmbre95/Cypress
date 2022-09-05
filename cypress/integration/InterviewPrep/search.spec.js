///<reference types="cypress"/>

describe('verify the checkboxes', function () {

    Cypress.on('uncaught:exception', (err, runnable) => { return false; });

    it('verify the mobile checkbox', function () {
        cy.visit('https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_4d1ohbptwj_e&adgrpid=58490306106&hvpone=&hvptwo=&hvadid=486457318205&hvpos=&hvnetw=g&hvrand=8922498687499276448&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9299348&hvtargid=kwd-298187295805&hydadcr=5657_2175734&gclid=Cj0KCQjwxIOXBhCrARIsAL1QFCawbyILJNlM-KCVBdZTeIV9UlTlwSFxSg9kKTTrokNCguNIf97EiNwaAprvEALw_wcB')
        cy.get('#twotabsearchtextbox').type('mobile')
        // cy.wait(4500)
        cy.get('#nav-search-submit-button').click()
        // cy.get('.a-spacing-micro').find('span[class="a-list-item"]').each((el)=>{
        //      let element = el.find('span:first')
        //     cy.wrap(element).contains('Samsung')
        // })
        cy.get('li[id="p_89/Samsung"]').find('input').then((ele)=>{
            cy.get(ele).check({force: true})
            cy.wait(10000)
            cy.wrap(ele).find('.a-label').find('span[class="a-size-base a-color-base"]').first().should('have.text','Samsung')
        })
        // cy.wait(4500)
        // cy.get('#brandsRefinements').each(function (el, index) {
        //     cy.wrap(el).find('li').should('have.id', 'p_89/Samsung')
        // })
    })
})