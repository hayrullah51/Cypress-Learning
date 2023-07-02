/// <reference types="cypress" />

describe('', ()=>{

   
    it('Possitive Test', ()=> {
        const username = "Manager"
        const password = "Manager1!"
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.contains('Log in').click()
        
        cy.get('#UserName').type(username)
        cy.get('#Password').type(password)
        cy.get('#btnSubmit').click()
        cy.get('#menuYonetim > .title').should('be.visible')
        cy.url().should('include','Admin/UserAdmin')
        cy.url().should('contain','/Admin/UserAdmin')
        

    })

    it.only('Negative Test', ()=> {
        const username = "Manager"
        const password = "Manager"
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.contains('Log in').click()
        cy.get('#UserName').type(username)
        cy.get('#Password').type(password)
        cy.get('#btnSubmit').click()
        cy.get('.validation-summary-errors > span').should('be.visible')
        cy.get('.validation-summary-errors > span').should('include.text','Try again please')
        cy.get('.validation-summary-errors > ul > li').should('be.visible')
        cy.get('.validation-summary-errors > ul > li').should('include.text','Username or password is incorrect, please correct them and try again')
        cy.get('.validation-summary-errors > ul > li').should('include.text','try again')

        
    })

})