/// <reference types="cypress" />

context("My Second Test", () => {
  //describe yerine context de kullanabiliriz!
  beforeEach('Her Test oncesi calisacak', ()=>{
    cy.visit('/')
  })

  //it ile basliyan satirlar test demek
  it("URL Test", () => {
    cy.url().should('include','google')
    //cy.url().should('eq','https://www.google.com')
  });

  it("Title Test", () => {
    cy.title().should('include','Google')
    //'cy.title().should('equal','Google ')
  });

  it("Search Test", () => {
    cy.get("[name='q']",{timeout:30000}).type('Cypress.io {enter}')
    
    // get() : locate aliyoruz
    // type() : metin gonderiyoruz sendkeys
    // {enter} enter tusuna bas demektir
  });

  it("", () => {
    cy.get("[name='q']", {timeout:5000}).type('Hayrullah {enter}')
  });

  it.only('Click Test', ()=> {

    cy.get('.gb_f').click()

    // it.only: sadece bu testi calistir demektir
    // it.skip: testi yapmadan gecer
    
})

});
 