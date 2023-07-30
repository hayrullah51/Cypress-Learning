class LoginPage{
    getUsernameBox(){
        return cy.get('form > :nth-child(2) > .input')
    }

    getPasswordBox(){
        return cy.get(':nth-child(4) > .input')
    }
}
export default LoginPage;