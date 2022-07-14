///<reference types = "cypress" />

//63895535263218b724369e267bbf2a52155473ef90b78d9ba660fbed7ba674bf

describe('verify the Go rest API', function () {
    it('verify the LIST user API', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer 63895535263218b724369e267bbf2a52155473ef90b78d9ba660fbed7ba674bf`
            }
        }).then(function (res) {
            expect(res.status).to.eql(200)
            expect(res.body.length).to.eql(10)
            res.body.forEach(element => {
                expect(element).to.have.keys(["id", "gender", "name", "email", "status"])
            });
        })
    })
    it('verify the CREATE user API', function () {
        let payload =
        {
            "name": "Tenali Ramakrishna",
            "gender": "male",
            "email": `tenali${Math.random() * 6}.ramakrishna@15ce.com`,
            "status": "active"
        }
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer 63895535263218b724369e267bbf2a52155473ef90b78d9ba660fbed7ba674bf`
            },
            body: payload
        }).then(function (response) {
            expect(response.status).to.eql(201)
            expect(response.body).to.have.keys(["id", "name", "email", "gender", "status"])
            // assertion on property value
            expect(response.body.id).not.eql(null)
            expect(response.body.name).to.eq(payload.name)
            expect(response.body.gender).to.eq(payload.gender)
            expect(response.body.status).to.eq(payload.status)
            expect(response.body.email).to.eq(payload.email)

        })
    })

    it('verify the UPDATE user API', function () {
        let payload ={"name":"Allasani Peddana", 
        "email":"allasani.peddana@15ce.com", 
        "status":"active"}
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/13",
            headers: {
                Authorization: `Bearer 63895535263218b724369e267bbf2a52155473ef90b78d9ba660fbed7ba674bf`
            },
            body:payload
        }).then(function(response){
            expect(response.status).to.eqls(200)
            expect(response.body).to.have.key(["id","name","email","gender","status"])
            expect(response.body.id).not.eql(null)
            expect(response.body.name).to.eq(payload.name)
            expect(response.body.status).to.eq(payload.status)
            expect(response.body.email).to.eq(payload.email)
        })
    })
    
})