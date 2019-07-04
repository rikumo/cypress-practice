// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//Add custom command to login to the practice website
Cypress.Commands.add("Login", () => {
    // Read and parse the file with the specified name in the fixtures folder. 
    // See Cypress doc for the file extensions that Cypress looks for
    cy.fixture("eauser").as("user")

    // ENter the login credentials
    cy.get("@user").then((creds) => {
        // Note: The argument in the lambda does not need to have a $ prefix

        cy.get('#UserName').type(creds.username, {log:false})        
        cy.get('#Password').type(creds.password, {log:false})
    })

    // Click the login button
    cy.get('.btn').click({force: true})
})
