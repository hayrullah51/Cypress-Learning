/// <reference types="cypress" />

describe("Hover Over", () => {
  it("Test Case", () => {
    cy.visit("https://www.amazon.com/");
    cy.get('.icp-nav-link-inner').trigger('mouseover')

    cy.wait(3000)

    cy.contains('Change country/region.').click()
    cy.get('#icp-dropdown').select('Canada',{force:true})


  });
});
