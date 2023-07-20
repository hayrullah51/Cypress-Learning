/// <reference types="cypress" />

describe('Suggested Elements', ()=>{

    it('Test Case', ()=> {
        cy.visit("https://www.amazon.com/");

        cy.get('#twotabsearchtextbox').type('java')
        cy.wait(2000)
        cy.get(':nth-child(4) > .s-suggestion-container > .s-suggestion').click()
        cy.get('.a-color-state').should('be.visible')
        cy.get('.a-color-state').should('include.text','java moss')

    })

  

})