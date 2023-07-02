// <reference types="cypress" />

describe('My First Test', ()=>{

    

    it('URL Test', function() {
        cy.visit('https://www.google.com/')
        cy.url().should('include','google')
        

    
    })

    it('Title Test', function() {

        cy.visit('https://www.google.com/')
        cy.title().should('include','Googl')
        cy.title().should('include','Goog')
           
        
        cy.title().should('eq','Google')
        
        
    })

    
})