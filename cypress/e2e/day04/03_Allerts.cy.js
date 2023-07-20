/// <reference types="cypress" />

describe("Allerts", () => {
  it("JS allerts", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.get(":nth-child(1) > button").click();
    //Cypress allertlarda otomayik tamama tikliyor!!!
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("Accept Alert Test", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.get(":nth-child(2) > button").click();
    cy.get("#result").should("have.text", "You clicked: Ok");
  });
  it("Dissmiss Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(":nth-child(2) > button").click();

    //cy.on() jQuery bir fonksiyondur
    //cy.on() browserda acilan pencerelerin komutlarini icerir
    //window:confirm ile confirm islemlerini yapariz false dondurursek OK degil Cancel i tiklar
    //cy.on('window:confirm',() => { return true; }) ==> default olarak gelir ve her zaman OK tikla demektir

    cy.on("window:confirm", () => {
      return false;
    });

    cy.get("#result").should("have.text", "You clicked: Cancel");
  });
  it.only("Allert Text", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window() // pop up pencerelerini kontrol eder
      .then(($windowsElement) => {
        //$windowsElement -> prompt'a bilgi girer
        cy.stub($windowsElement, "prompt").returns("Cypress"); //Cypress yaz
        cy.wait(3000);
        cy.get(":nth-child(3) > button").click();
      });
    cy.get("#result").should("have.text", "You entered: Cypress");
  });
});
