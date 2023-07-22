/// <reference types="cypress" />

describe("Drag and Drop", () => {
    /*
    Cypress'de Drag ve Drop islemlerini yapabilmemiz icin plaguin yuklememiz lazim
    bunun icin https://www.npmjs.com/ sitesinden arama yapip e2e.js dosyasina ve terminalden npx yuklemesi yaptik
    */
  it("", () => {
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    cy.get('#column-a').drag('#column-b')
    // ilki column-a suruklenen element locatesi drag icinede drop yapilacak elementik locatesi yazilacak
  });

  it.only("Darh and drop", () => {
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    const dataTransfer = new DataTransfer();
    cy.get('#column-a').trigger('dragstart', {
        dataTransfer
    })
    cy.get('#column-b').trigger('drop',{
        dataTransfer
    })
  });
});
