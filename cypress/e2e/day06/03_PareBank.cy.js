/// <reference types="cypress" />



before(function(){
    cy.fixture('parabank.json').then(function(data){
        this.data=data;
    })
})

describe('Parabank Bank', ()=>{

    it.only('Parabank Sign in  Test', function () {
        //cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.visit(this.data.url)

        cy.get('form > :nth-child(2) > .input')
        .type(this.data.username)

        cy.get(':nth-child(4) > .input')
        .type(this.data.password)

        cy.get(':nth-child(5) > .button').click()
       



        //cy.get('[colspan="2"] > .button').click()
        // password X404btv3QQcT7st
        // username Dejon




        


    })

   

})