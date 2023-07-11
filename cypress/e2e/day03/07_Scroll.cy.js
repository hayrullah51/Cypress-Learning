/// <reference types="cypress" />

describe("Scroll", () => {
  it("Scrollintoview ", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");
    
    cy.get(".col-md-7 > .mb-4").scrollIntoView();
    //locate ettigimiz yerin altina sayfayi kaydirir
    

    cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2')
    .scrollIntoView({ offset: { top: -25, left: 0 } })
    //locate edilen elementin ustune altina sagina soluna ne kadar mesafede durulsun ayari!!!
    //.scrollIntoView({duraction: 3000}})
    // 4 saniye icerisinde locate edilen yere gelir!


    cy.wait(3000)
    //scrollTo(x,y)
    cy.scrollTo(0,0) // en ust noktayab gider
    cy.wait(3000)
    cy.scrollTo(0,500)
    cy.wait(2000)
    cy.scrollTo('100px')
  });
});
