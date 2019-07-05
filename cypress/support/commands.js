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

Cypress.Commands.add("LoginToLambdatest", () => {
    // get the password from the file in fixtures folder
    cy.fixture("xhruser").as("user")

    // The actions that invoke XHR requests in the application
    cy.get("@user").then((theuser) => {
        // the code that needs to access the alias needs to be within this lambda
        cy.get("[name='email']").debug().type(theuser.username)
        cy.get("[name='password']", {timeout: 10000}).debug().type(theuser.password, { log: false })

    })        
    cy.get('.btn').click()
})