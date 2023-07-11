/// <reference types="cypress" />

describe("Suggested Elements", () => {
  it.only("Test Case 1", () => {
    cy.visit("https://www.google.com");
    cy.get('#APjFqb').type('Yahoo')
    //1, way
    //cy.get('#mdzGzd > .wM6W7d > span').contains('nedir').click()

    //2, way
    cy.get('li span b').contains('nedir').click()
    
  });

  it("Test Case 2", () => {
    cy.visit("https://www.amazon.com/");
  });
});
