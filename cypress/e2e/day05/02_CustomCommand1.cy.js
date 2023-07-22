/// <reference types="cypress" />

describe("Custom Command 1", () => {
  it("Possitive Login", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
    cy.get('[data-qa="login-email"]').type("hayrullah1@gmail.com");
    cy.get('[data-qa="login-password"]').type("11111111");
    cy.get('[data-qa="login-button"]').click();
    cy.get(".shop-menu > .nav > :nth-child(4) > a").should("be.visible");
  });

  it("Possitive custom kullanarak Login", () => {
    //Siteye login olmak icin fonksiyon kullandik
    cy.auEx_login('hayrullah1@gmail.com','11111111')
    //auEx_login fonksiyonunu commands.js dosyasinda olusturup burada cagirip verileri girdik!
    cy.get(".shop-menu > .nav > :nth-child(4) > a").should("be.visible");
  });
  it.only("Negative Login", () => {
    
    cy.auEx_login('yyy@gmail.com','xxx')
    //auEx_login fonksiyonunu commands.js dosyasinda olusturup burada cagirip verileri girdik!
    
    cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
    cy.url().should('include','login')
  });
});
