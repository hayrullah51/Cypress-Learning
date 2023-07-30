/// <reference types="cypress" />

import HomePage from "../POM/HomePage.cy";
import LoginPage from "../POM/LoginPage.cy";

before(function () {
  cy.fixture("parabank.json").then(function (data) {
    this.data = data;
  });
});

describe("Parabank Bank", () => {
  it.only("Parabank Sign in  Test", function () {
    
    cy.visit(this.data.url);

    const homePage = new HomePage;
    const loginPage = new LoginPage;


    
    homePage.getRegisterLink().click();// Register butonuna tiklar

    //cy.get("form > :nth-child(2) > .input").type(this.data.username);
    loginPage.getUsernameBox().type(this.data.username);

   // cy.get(":nth-child(4) > .input").type(this.data.password);
   loginPage.getPasswordBox().type(this.data.password)

   // cy.get(":nth-child(5) > .button").click();
   homePage.getLoginButton().click()

    
    
  });
});
