/// <reference types="cypress" />

describe("View Ports", () => {
  it.skip("", () => {
    cy.visit("https://www.amazon.com/");
    cy.viewport('iphone-8')
    cy.screenshot()
    cy.wait(3000)
    cy.viewport('samsung-s10')
    cy.screenshot()
  });

  it.skip("", () => {
    cy.visit('https://www.google.com.tr/')
    cy.viewport('ipad-2')
    cy.screenshot()
    cy.viewport('macbook-16')
    cy.screenshot()
  });

  it.skip("", () => {
    cy.visit('https://www.google.com.tr/')
    cy.viewport(500,800)
    cy.screenshot()
  });

});
