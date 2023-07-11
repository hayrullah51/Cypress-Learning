/// <reference types="cypress" />

describe('Before After', ()=>{

    before( () => {
        cy.log('Her test dosyasindan once bir kere calisacak')
    })
    after(() => {
        cy.log('Her test dosyasindan sonra bir kere calisacak')
    })

    beforeEach(() =>{
        cy.log('Her testten once bir defa calisacak')
    })
    afterEach(() => {
        cy.log('Her testten sonra bir defa calisacak')
    })

    it('Test Case 01', ()=> {
        cy.log('Test Case 01 log')

    })

    it('Test Case 02', ()=> {
        cy.log('Test Case 02 log')
        
    })

})