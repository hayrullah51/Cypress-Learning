/// <reference types="cypress" />

describe("Login Test 02", () => {
  it("", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    // 1. contains('text')
    // 2. contains('locater', 'text')

    //cy.contains("Log in").click(); 

    //cy.contains('[class="nav-link"]', "Log in").click();

    //cy.contains('li', 'Log in').click()
    //contains('text)
    cy.contains('log in', {matchCase:false}).click()
    // {matchCase:false} => Buyuk kucuk harf dikkate almadan metin olarak log in iceren web elementini ara

    //ASSERT
    //1 have.text
    cy.get('#navLogon > .nav-link').should('have.text','Log in')
    //Locate edilen yerdeki metinde Log in yaziyor mu? yu kontrol ediyor

    //2 URL
    cy.url().should('include','Account/Logon')

    //3 be.visible
    cy.get('.row > .mb-4').should('be.visible')

    //4 cy.title
    cy.title().should('eq','KoalaResortHotels - Log in')

    //5 include.text
    cy.get('#navLogon > .nav-link').should('include.text','Log in')
     //Locate edilen yerdeki metinde Log in yaziyor mu? yu kontrol ediyor have.text ile ayni

     //Toplam link sayisi
     cy.get('li a').should('have.length', '29')
     cy.get('li').find('a').should('have.length', '29')

     //find : Belirli bir html seciminin alt elemanlarini 'child elementleri' bulmak icin kullanilir
     cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2')
     //cy.find() seklinde kullanilmaz !!!
     //cy.get().find() seklinde kullanilir

     //within()
     cy.get('div.categories').within(() => {
      cy.get('a[href="/Rooms/320"]').click
     })
     /*
     Not: Web elementleri ilk olarak get() ile bulunmaya calisilir
     get() ile bulunamazsa find() ile bulunur
     find() ile bulunamazsa within() ile bulunur
     */


  });
});
