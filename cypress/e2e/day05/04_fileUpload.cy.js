/// <reference types="cypress" />


/*
1. https://www.npmjs.com/package/cypress-file-upload sitesinden pluhin aldik

2. npm install --save-dev cypress-file-upload code'sini terminalden yukledik !



*/

describe("", () => {
  it("Single File Upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    const part01 = "01.jpeg";
    cy.get("#filesToUpload").attachFile(part01);
    //include.text iceriyor mu demek have.text ise var mi demek!
    cy.get("#fileList > li").should("include.text", "01.jpeg");
  });

  it("Multiple File Upload 01", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    const part01 = "01.jpeg";
    const part02 = "02.jpeg";
    const part03 = "03.jpeg";

    cy.get("#filesToUpload")
      .attachFile(part01)
      .attachFile(part02)
      .attachFile(part03);
  });

  it("Multiple File Upload 02", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    const part01 = "01.jpeg";
    const part02 = "02.jpeg";
    const part03 = "03.jpeg";
    cy.get("#filesToUpload").attachFile([part01, part02, part03]);

    cy.get("#fileList > :nth-child(1)").should("have.text", "01.jpeg");
    // have.text'de birebir ayni olmak zorunda
    cy.get("#fileList > :nth-child(2)").should("contain.text", "02.jpeg");
    cy.get("#fileList > :nth-child(3)").should("include.text", "03.jpeg");
  });

  it.only("OverWrite File Name", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    const part01 = "01.jpeg";
    cy.get('#filesToUpload').attachFile({filePath: part01, fileName: 'image01.jpg'})
    //{filePath: part01, fileName: 'image01.jpg'} gonderdigimiz klasorun ismini degistirip gonderiyor!
    cy.get('#fileList > li').should('have.text','image01.jpg')

  });

  
});
