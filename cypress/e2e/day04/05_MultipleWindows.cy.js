/// <reference types="cypress" />

describe("Multiple Windows", () => {
  it.only("Removing Attribute", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example > a").invoke("removeAttr", "target").click();
    //invoke() ile DOM yapisinda degisiklik yapabiliyoruz
    //Orneegin burda <a href="/windows/new" ,="" target="_blank">Click Here</a> yapisinin target attributesini
    // sildik boylede bos sayfada acilmasini engelleyerek ayni sayfada acilmasini sagladik
    cy.get("h3").should("have.text", "New Window");
  });

  it("New Url", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example > a").then((element) => {
        const newUrl = element.prop('href')
        cy.visit(newUrl)
    })
    // yukarida then() ile bir fonksiyon tanimladik
    // element adini verdigimiz fonksiyon ile newurl'e href tag'inin degerini atadik ->  <a href="/windows/new" ,="" target="_blank">Click Here</a>
    //bboylede href deki linke visit etmesini saglayarak ayni sayfada acilmasini sagladik
    //prop() ile href degerini aldik !!!
  });
});
