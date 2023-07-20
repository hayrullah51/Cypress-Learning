/// <reference types="cypress" />

describe("IFrame", () => {
  it.only("Iframe Test", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    /*
    1. Plugin indir
    https://www.npmjs.com/ -> bu adresden istedigimiz plugin i indirebiliriz
    npm install -D cypress-iframe -> terminale yaz ve kurulum yap

    2. import islemini yap
    import 'cypress-iframe';
    // or
    require('cypress-iframe');
    ikisinden birini support e2e.js dosyasina yapistir

    3. bu islemlerden sonra cy.frameLoaded() ve cy.iframe() komutlarini kullanabilecegiz
    */

    cy.frameLoaded('#mce_0_ifr')
    //cy.frameLoaded() bu code lada iframe'nin yerini tanimliyoruz
    //Seleniumdaki driver.switchto.frame('#mce_0_ifr') ile aynidir
    cy.iframe().find('p').clear()
    //cy.iframe() bu code ile iframe'e gidilir
    cy.iframe().find('p').type('Cypress was HERE!!!')
    cy.iframe().find('p').should('have.text','Cypress was HERE!!!')
    cy.get('.large-4 > div > a').should('have.text','Elemental Selenium')
    cy.get('.large-4 > div > a').click()

  });

  
});
