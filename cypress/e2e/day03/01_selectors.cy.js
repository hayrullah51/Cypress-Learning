/// <reference types="cypress" />

describe("Selectors Examples", () => {
  it("Css Selectors", () => {
    cy.visit("https://www.amazon.com/");

    //1. By Tag Name
    cy.get("input");

    // 2. By id
    cy.get("#twotabsearchtextbox");

    //3. By class
    cy.getMaxListeners('.nav-input nav-progressive-attribute')

    //4. By attribute name and value\
    cy.get('input[type="text"]')

    //5. By 2 attribule
    cy.get('input[type="text"][id="twotabsearchtextbox"]')

  });

  it("XPath Selectors", () => {
    cy.visit('https://www.google.com')

    //6. By xpath
    cy.xpath('//a[@aria-label="Gmail (yeni bir sekme açar)"]').should('be.visible')
    cy.xpath('//a[@aria-label="Gmail (yeni bir sekme açar)"]').should('include.text','Gmail')

    // Cypress plugins ekleme islemi
    // require('cypress-xpath') kodunu e2e.cy.js [support klasoru altinda]
    // Cypress de xpath kullanimi sikinti !!!
    
    
  });
});
