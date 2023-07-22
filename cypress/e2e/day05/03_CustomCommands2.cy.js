/// <reference types="cypress" />

describe("Custom Commands 2", () => {
  it.only("Amazon Urun Arama", () => {
    cy.amazonUrunArama('nutella');
    cy.get('.a-section > .a-color-state').should('include.text','nutella')
    cy.get('#twotabsearchtextbox').should('have.value','nutella')
    cy.screenshot()
  });

  it("", () => {
    
  });
});
