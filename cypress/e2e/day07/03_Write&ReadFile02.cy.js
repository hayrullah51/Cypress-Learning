/// <reference types="cypress" />

describe("Write & Read File 02", () => {
  it.only("Write&Read Json File", () => {
    cy.writeFile("cypress/e2e/day07/JsonFile.json", {
      name: "Eliza",
      email: "eliza@example.com",
    });
    cy.readFile("cypress/e2e/day07/JsonFile.json").then(  (user) => {
        expect(user.name).to.equal('Eliza');
        expect(user.email).to.equal("eliza@example.com");
    })
  });

  it("", () => {});
});
