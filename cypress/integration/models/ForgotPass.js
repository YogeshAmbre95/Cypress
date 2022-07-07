export class ForgotPassword{
    navigate(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/requestPasswordResetCode')
    }
    validateLogo(){
        cy.get('#divLogo > img').should('be.visible')
        }
        validateText(){
            cy.get('h1').should('be.visible').should('have.text','Forgot Your Password?')
        }

        validateResetPasswordButton(userName){
            cy.get('#securityAuthentication_userName').type(userName)
            cy.get('#btnSearchValues').click()
            cy.get('.message').should('be.visible')
        }

        validateCancel(){
            cy.get('#btnCancel').click()
            cy.url().should('contain','auth')
        }
    }
