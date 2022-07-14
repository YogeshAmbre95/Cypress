///<reference types="cypress" />

describe('Traversal methods in cypress', function () {

    beforeEach(function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    })

    it('To get a DOM element at a specific index,use the .eq() command.', function () {
        cy.get('.traversal-food-list').find('li').eq(1).should('have.text', 'Apple')
        cy.get('.traversal-food-list').find('li').eq(4).should('have.text', 'Cherries')
    })

    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.get('.traversal-food-list').find('li').first().should('have.text', 'Fruits')
    })

    it('To get the last DOM element within elements, use the .last() command.', function () {
        cy.get('.traversal-food-list').find('li').last().should('contain', 'Lentils')
    })

    it('To get children of DOM elements, use the .children() command.', function () {
        cy.get('.traversal-food-list').children().should('have.length', 11)
    })

    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.get('#fruits').next().should('have.text', 'Apple')
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.', function () {
        cy.get('#veggie').prev().should('have.text', 'Figs')
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.get('#fruits').siblings().contains('Figs')
        cy.get('#veggie').siblings().should('have.length', 10)

    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function () {
        cy.get('#fruits').nextAll().should('have.length', 10)
    })

    it('To get all of the next sibling DOM elements within elements, use the .prevAll() command.', function () {
        cy.get('#veggie').prevAll().should('have.length', 6)
    })

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', function () {
        cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)


    })
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
        cy.get('#fruits').nextUntil('#veggie').should('have.length', 5)

    })
    it('To get descendant DOM elements of the selector, use the .find() command.', function () {
        cy.get('.thumbnail').find('.traversal-drinks-list').find('#coffee').should('have.text', 'Coffee')
    })

    it('To get the closest ancestor DOM element, use the .closest() command.', function () {
        cy.get('#coffee').closest('ul').should('have.class', 'traversal-drinks-list')
    })
    
    it('To get children of DOM elements, use the .children() command.', function () {
        cy.get('.traversal-drinks-list').children().filter('#coffee').should('have.text', 'Coffee')
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.', function () {
        cy.get('div[data-toggle="buttons"]').children('button').not('.active').should('have.length', 3)
    })

    it('To get parents DOM element of elements, use the .parents() command.', function () {
        cy.get('#veggie').parents().filter('.container').should('have.length', 1)

    })

    it('To get parents DOM element of elements, use the .parents() command.', function () {
        cy.get('#fruits').parent().should('have.class', 'traversal-food-list')
    })

    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.', function () {
        cy.get('#fruits').parentsUntil('.col-sm-12').should('have.length', 2)
    })


})