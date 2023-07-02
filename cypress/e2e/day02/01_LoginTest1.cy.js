/// <reference types="cypress" />

describe('Koala Resort Hotel', ()=>{

    it('Log in Test', ()=> {
        // Burda iki farkli tiklama locate alma method u var onemli!!!

        cy.visit('https://qa-environment.koalaresorthotels.com/')

        // 1. way
        //cy.get('#navLogon > .nav-link').click()

        //2. way
        cy.contains('Log in').click()
        // contains(): DOM'da log in textini bul sonra tikla 

        cy.url().should('include', 'Account/Logon') 

        //username : Manager
        cy.get('#UserName').type('Manager')


        // password : Manager1!
        // 1. way
        //cy.get('#Password').type('Manager1!')

        //cy.get('#btnSubmit').click()

        // 2. way
        cy.get('#Password').type('Manager1!{enter}')
        

    })

    it.skip('', ()=> {

        
    })

})