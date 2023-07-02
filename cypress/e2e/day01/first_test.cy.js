/// <reference types="cypress" />

describe('My First Test', ()=>{

    //describe ve it mocha'dan geliyor

    it('URL Test', ()=> {
        cy.visit('https://www.google.com/')
        // visit(URL) : URL'e git

        cy.url().should('include','google')
        // should assert islemi icin kullaniliyor 
        // cy.url().should('include','google') --> URL 'google' kelimesinin icerdigini assert eder

    
    })

    it('Title Test', ()=> {

        cy.visit('https://www.google.com/')
        cy.title().should('include','Googl')
        cy.title().should('include','Goog')
        // title sayfanin title'ini ni alir    
        
        cy.title().should('eq','Google')
        // eq -> equal 
        
    })

    

})