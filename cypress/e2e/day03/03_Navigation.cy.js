/// <reference types="cypress" />

describe('Navigation', ()=>{

    it('Back, Forward, Reflesh', ()=> {
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.wait(3000)
        cy.get('#navLogon > .nav-link').click()
        cy.wait(3000)
        cy.go('back') // cy.go(-1) -> bu da back gibi islev goruyor
        //cy.go(-1)
        cy.wait(3000)

        cy.go('forward') // cy.go('1') -> bu da forward gibi islev goruyor

        cy.reload // reflesh
        cy.wait(3000)

    })

    it.only('Changing Navigation', ()=> {

        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.wait(3000)
        cy.get('#navLogon > .nav-link').click()
        cy.wait(3000)
        cy.reload
        cy.go('back').go('forward').go(-1).go(1)
        cy.reload(true)
        // cy.reload(true) sayfayi cashden(hafizadan) degil yeniden yukle

    })

    

}) 