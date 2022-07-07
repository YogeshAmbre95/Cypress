///<reference types="cypress" />

describe('verify the reqres api', () => {
    it('verify the GET API', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eqls(200)
        })
    })
    it('verify the POST api', function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {

                "name": "morpheus",
                "job": "leader"
            }
        }).then(function (response) {
            expect(response.status).to.eql(201)
        })
    })
    it.only('verify the PUT API', function () {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function ({ status, duration }) {
            expect(status).to.eq(200)
            expect(duration).to.be.lessThan(2000)
        })
    })
})