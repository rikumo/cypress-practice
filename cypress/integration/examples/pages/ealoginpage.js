/// <reference types ="Cypress" />

// Page object for Execute Automation Login page
export class EALoginPage {
    performLogin(userName, password) {
        cy.get('#UserName').type(userName, {log:false})        
        cy.get('#Password').type(password, {log:false})
    }

    clickLoginButton() {
        cy.get('.btn').click({force: true})
    }
}

export const loginPage = new EALoginPage()