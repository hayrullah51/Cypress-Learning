class HomePage{
    getRegisterLink(){
        return cy.contains('Register')
    }

    getLoginButton(){
        return cy.get(':nth-child(5) > .button')
    }
}
export default HomePage