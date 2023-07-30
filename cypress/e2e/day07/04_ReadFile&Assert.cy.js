/// <reference types="cypress" />

describe("ReadFile&Assert", () => {
  it.only("", () => {
    cy.readFile(
      "C:/Users/hdede/OneDrive/Masaüstü/Cypress-Learning/cypress/fixtures/users.json"
    ).then((userData) => {
      expect(userData[3].name).to.equal("Patricia Lebsack");
      expect(userData[3].id).to.equal(4);
      expect(userData[3].address.street).to.equal("Hoeger Mall");
      expect(userData[3].address.geo.lat).to.equal("29.4572");
    });
  });

  it("", () => {});
});
