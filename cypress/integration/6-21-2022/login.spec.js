import { Login } from "../models/login"
const login = new Login()

describe('testscenario for login functionality', function(){
    beforeEach(function(){
        login.navigate()
    })

    it('verify the login with valid credential',function(){
        login.login("Admin","admin123")
    })
    it('verify the login with invalidate credential',function(){
        login.login("Admin","admin1222")
        login.validateInvalidLogin()
    })

    it('verify visibility for logo',function(){
        login.validateLogoIsVisible()
    })
    it('verify visibility forgotPassword link',function(){
        login.validateVisibilityforForgotPass()
    })
})