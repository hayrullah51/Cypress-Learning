/// <reference types="cypress" />

describe("Write&Read File", () => {
  it("Write File", () => {
    cy.writeFile("cypress/e2e/day07/NOTES.txt", "CYPRESS NOTES\n");

    cy.writeFile("cypress/e2e/day07/NOTES.txt", "CYPRESS INSTALL\n", {
      flag: "a+",
    });

    cy.writeFile("cypress/e2e/day07/NOTES.txt", "CYPRESS PLUGINS", {
      flag: "a+",
    });
    // \n --> Bir alt satira iner!!!
    // {flag: "a+"}  --> satiri kaydeder ve sonra writeb file dedigimizde eskisinin yerine yeni kayit
    //yapmadan yanina kaydederek ilerler
  });

  it("Read File", () => {
    cy.readFile("cypress/e2e/day07/NOTES.txt").should("contain", "PLUGIN");
  });
});
