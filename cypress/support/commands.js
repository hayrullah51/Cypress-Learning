// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('auEx_login', (email, password) => {
  cy.visit("https://www.automationexercise.com/");
  cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();

});

Cypress.Commands.add('amazonUrunArama',(urunAdi) =>{
  cy.visit('https://www.amazon.com/')
  cy.get('#twotabsearchtextbox').type(urunAdi)
  cy.get('#nav-search-submit-button').click()
})
