///<reference types="cypress" />

describe('verify the get navigation bar',function(){

    let getframeBody=function(id){
        return cy.get(`#${id}`)
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
    }

    it('verify the active link in nav Iframe- using jquery',function(){
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function($iframe){
            let body=$iframe.contents().find('body')
            cy.wrap(body)
        })
    })
})