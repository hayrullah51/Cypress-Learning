/// <reference types="cypress" />

describe("SuperDomain", () => {
  it("amazon", () => {
    cy.visit("https://www.amazon.com/");
    cy.wait(3000);
  });

  it.only("cypressio test 1,5", () => {
    cy.visit("https://www.cypress.io/");
    cy.wait(3000);
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
  });

  it("google", () => {
    cy.visit("https://www.google.com/");
    cy.wait(3000);
    cy.visit("https://www.amazon.com/");
    cy.wait(3000);
  });
});
