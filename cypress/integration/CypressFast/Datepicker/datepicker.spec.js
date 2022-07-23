///<reference types="cypress"/>

describe('select date from date picker', function () {
    it('Date picker', function () {
        // let date=new Date()
        // cy.log(date.getMonth())
        // cy.log(date.getFullYear())
        // cy.log(date.getDate())


        let date1 = new Date()
        date1.setDate(date1.getDate() + 400)
        let year = date1.getFullYear()
        //let month=date1.getMonth()
        let date = date1.getDate()
        let month = date1.toLocaleString("default", { month: 'long' });
        // let time = date1.getHours
        // cy.log(date1)

        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function selectMonthAndYear(){
            cy.get('.datepicker-switch').first().then(function(el){
                if(!el.text().includes(year)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(function(){
                cy.get('.datepicker-switch').first().then(function(el){
                    if(!el.text().includes(month)){
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }
        function selectFutureDate(){
            cy.contains(date).click()
        }
        selectMonthAndYear()
        selectFutureDate()

    })
})