/// <reference types="cypress" />

describe("Check Boxes", () => {
  it("Single Check Box", () => {
    /*
        cy.visit("https://www.amazon.com/");

        cy.get('#twotabsearchtextbox').type('Nutella')
        cy.get('#nav-search-submit-button').click()

        cy.get('div#climatePledgeFriendlyRefinements i').should('not.be.checked')
        // tikli olmadigini test eder
        cy.get('#p_n_cpf_eligible\/21512497011 > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').check()
        

        
        cy.get("div#climatePledgeFriendlyRefinements i").scrollIntoView();
        cy.wait(3000)
        cy.get("i[class='a-icon a-icon-checkbox']").eq(5).should('not.be.checked')
        //cy.get("i[class='a-icon a-icon-checkbox']").eq(5).check()
        */
  });

  it("Check Box", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");

    cy.get("#checkboxes > :nth-child(1)").should("not.be.checked");
    cy.get("#checkboxes > :nth-child(1)").check();
    cy.get("#checkboxes > :nth-child(1)").should("be.checked");

    cy.get("#checkboxes > :nth-child(3)").should("be.checked");
    cy.get("#checkboxes > :nth-child(3)").uncheck();
    cy.get("#checkboxes > :nth-child(3)").should("not.be.checked");
  });

  it("All Check Boxes", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
    cy.get("input[type='checkbox']").check();
    //Tum Checkbox'lara tiklandi
    cy.wait(2000);
    cy.get("input[type='checkbox']").uncheck();
    // tum checkbox'lar kaldirildi
  });

  it("All checkBoxes 02", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
    // get("input[type='checkbox']") -> bu tum checkbox'larin locate i

    //1. checkbox'a tikla
    cy.get("input[type='checkbox']").eq(0).check();
    cy.get("input[type='checkbox']").eq(0).should("be.checked");
    cy.get("input[type='checkbox']").eq(0).uncheck();
    cy.get("input[type='checkbox']").eq(0).should("not.be.checked");

    //2. Checkbox'a tikla
    cy.get("input[type='checkbox']").eq(1).check();
    cy.get("input[type='checkbox']").eq(1).should("be.checked");
    cy.get("input[type='checkbox']").eq(1).uncheck();
    cy.get("input[type='checkbox']").eq(1).should("not.be.checked");
  });

  it.only("", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
    cy.wait(3000)
    cy.get("input[type='checkbox']").click({ multiple: true });
    //click ile birden fazla checkbox veya radio butona tiklamak icin { multiple: true } eklemek lazim
    cy.get("input[type='checkbox']").first().should('have.attr','checked')
    //cy.get("input[type='checkbox']").first().parent().should('have.attr','checked')
    //.parent() ust parent a gider

  });
});
