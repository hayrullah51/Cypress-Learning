/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
/*
FAKER KURULUM 
1. https://www.npmjs.com/package/@faker-js/faker

2. npm install --save-dev @faker-js/faker

3. import { faker } from '@faker-js/faker'; bunu 2.satira yaziyoruz --> npm sitesinde aciklamalar var!
bu islemi sadece bir class da yapmak yeterli sonraki yerlerde faker kendi geliyor!!!
*/

describe("Using Faker", () => {
  it("Faker Login Test", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.get(".login").click();

    //let var const javascript degiskenler
    let email = faker.internet.email();
    cy.get("#email_create").type(email);
    cy.get("#SubmitCreate > span").click();

    cy.get("#id_gender1").click();

    let firstname = faker.person.firstName("male");
    cy.get("#customer_firstname").type(firstname);

    let lastname = faker.person.lastName("male");
    cy.get("#customer_lastname").type(lastname);

    let password = faker.internet.password();
    cy.get("#passwd").type(password);

    let day = faker.number.int({ min: 1, max: 30 });
    //cy.get('#days').select('option '+day)
    cy.get("#days").select(day);

    let month = faker.number.int({ min: 1, max: 12 });
    cy.get("#months").select(month);

    let year = faker.number.int({ min: 2005, max: 2023 });
    //cy.get("#years").select(year);
    cy.get("#newsletter").click();

    cy.get("#submitAccount > span").click();
  });
});
