/// <reference types="cypress" />

import { faker } from "@faker-js/faker"

before

describe('Parabank Bank', ()=>{

    it.only('Parabank Sign in  Test', ()=> {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()

        let firstname = faker.person.firstName();
        cy.get('input[name="customer.firstName"').type(firstname)

        let lastname = faker.person.lastName()
        cy.get('input[name="customer.lastName"').type(lastname)

        let adress = faker.location.streetAddress({useFullAddress:true})
        cy.get('input[name="customer.address.street"').type(adress)

        let city = faker.location.city();
        cy.get('input[name="customer.address.city"').type(city)

        let state = faker.location.state()
        cy.get('input[name="customer.address.state"').type(state)

        let zipCode = faker.location.zipCode()
        cy.get('input[name="customer.address.zipCode"').type(zipCode)

        let  phoneNumber = faker.phone.number()
        cy.get('input[name="customer.phoneNumber"').type(phoneNumber)

        let snn = faker.number.int({min:100000000,max:999999999})
        cy.get('input[name="customer.ssn"').type(snn)


        cy.get('input[name="customer.username"').type(firstname)

        let password = faker.internet.password()
        cy.get('input[name="customer.password"').type(password)
        cy.get('input[name="repeatedPassword"').type(password)


        cy.get('[colspan="2"] > .button').click()
        




        


    })

    it('Parabank Login  Test', ()=> {

        get.visit()
    })

})