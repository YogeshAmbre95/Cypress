

describe('verifying search functionality of flipkart',function(){
    
    it('Ts-01 Verifying Search Bar',function(){
       cy.visit('https://jqueryui.com/checkboxradio/')
       cy.get('iframe').then(function(iframe){
       let body= iframe.contents().find('body')
       cy.wrap(body).as('iframebody')
       })
    cy.get('@iframebody').find('.ui-checkboxradio-label.ui-corner-all.ui-button.ui-widget').eq(7).click()
       
      
    })
})