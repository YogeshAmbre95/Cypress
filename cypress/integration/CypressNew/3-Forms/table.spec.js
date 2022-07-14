///<reference types="cypress" />

describe('Verify the table',function(){
    it('verify the addition value for the table 1',function(){
        let sum=0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tr').each(function(row,index){
            if(index !=0){
                sum=sum+ Number(row.children().last().text())
            }
        }).then(function(){
            expect(sum).to.eql(159)
        })
    })

    it('verify the addition value for the table 2',function(){
        let sum=0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02').find('tr').each(function(row,index){
            if(index !=0){
                sum=sum+ Number(row.children().last().text())
            }
        }).then(function(){
            expect(sum).to.eql(163)
        })
    })
})