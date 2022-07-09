// assertion 
// unit , intergration , end to end testing
// unit class or function (component testing)  ==> integration ====> user behaviour

///<reference types= "cypress"/>

describe('Verify the functionality of API', function () {
    it('Verify the count of user via API', function () {
        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users?page=2"

        }).then(function ({ body, duration, headers, status }) {
            cy.log(body)
            expect(status).to.eql(200)
            expect(duration).to.be.within(15, 150)
            //expect(duration).to.be.lessThan(200) no recommened
            expect(body).to.have.key(["data", "page", "per_page", "support", "total", "total_pages"])
            body.data.forEach(element => {
                expect(element).to.have.keys(["id","email","first_name","last_name","avatar"])

            expect(element.id).not.to.eql(null)
            expect(element.first_name).not.to.eql(null)
            expect(element.last_name).not.to.eql(null)
            expect(element.email).not.to.eql(null)
            expect(element.avatar).not.to.eql(null)
                
            });
            expect(headers).to.have.property('content-type',"application/json; charset=utf-8")
        })


    })
})

// "data"
// 1: "page"
// 2: "per_page"
// 3: "support"
// 4: "total"
// 5: "total_pages"

// "id","email","first_name","last_name","avatar"

// body: {page: 2, per_page: 6, total: 12, total_pages: 2, data: Array(6), …}
// duration: 196
// headers: {date: 'Sat, 09 Jul 2022 02:02:57 GMT', content-type: 'application/json; charset=utf-8', transfer-encoding: 'chunked', connection: 'keep-alive', x-powered-by: 'Express', …}
// status: 200
// [[Prototype]]: Object

// 0: {id: 7, email: 'michael.lawson@reqres.in', first_name: 'Michael', last_name: 'Lawson', avatar: 'https://reqres.in/img/faces/7-image.jpg'}
// 1: {id: 8, email: 'lindsay.ferguson@reqres.in', first_name: 'Lindsay', last_name: 'Ferguson', avatar: 'https://reqres.in/img/faces/8-image.jpg'}
// 2: {id: 9, email: 'tobias.funke@reqres.in', first_name: 'Tobias', last_name: 'Funke', avatar: 'https://reqres.in/img/faces/9-image.jpg'}
// 3: {id: 10, email: 'byron.fields@reqres.in', first_name: 'Byron', last_name: 'Fields', avatar: 'https://reqres.in/img/faces/10-image.jpg'}
// 4: {id: 11, email: 'george.edwards@reqres.in', first_name: 'George', last_name: 'Edwards', avatar: 'https://reqres.in/img/faces/11-image.jpg'}
// 5: {id: 12, email: 'rachel.howell@reqres.in', first_name: 'Rachel', last_name: 'Howell', avatar: 'https://reqres.in/img/faces/12-image.jpg'}
// length: 6
// [[Prototype]]: Array(0)
// page: 2
// per_page: 6
// support: {url: 'https://reqres.in/#support-heading', text: 'To keep ReqRes free, contributions towards server costs are appreciated!'}
// total: 12
// total_pages: 2
// [[Prototype]]: Object
