/// <reference types ="Cypress" />

// Page object for Execute Automation Login page
export class EALoginPage {
    performLogin(userName, password) {
        cy.get('#UserName').type(creds.username, {log:false})        
        cy.get('#Password').type(creds.password, {log:false})
    }

    clickLoginButton() {
        cy.get('.btn').click({force: true})
    }
}

export const loginPage = new EALoginPage()