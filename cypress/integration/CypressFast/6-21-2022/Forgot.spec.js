import { ForgotPassword } from "../models/ForgotPass"

const forgotpass = new ForgotPassword()

describe('validate the forgot password page', function () {
    beforeEach(function () {
        forgotpass.navigate()
    })
    it('validate Logo', function () {

        forgotpass.validateLogo()

    })
    it('validate text', function () {
        forgotpass.validateText()
    })

    it('validate reset password button', function () {
        forgotpass.validateResetPasswordButton('Admin')
    })
    it('validate cancel button', function () {
        forgotpass.validateCancel()
    })
})

