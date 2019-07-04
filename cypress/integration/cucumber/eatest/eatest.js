import { Given, When, Then, And, Before, BeforeEach, After, AfterEach } from "cypress-cucumber-preprocessor/steps";


Given("I visit the EA site", () => {
    cy.visit("http://eaapp.somee.com/")
})

And("I click on the login link", () => {
        // Go to the login page from the home page
        cy.contains("Login").click()
        cy.url().should("include", "/Account/Login")

        //Get an element and store its reference in an alias using a Promise
        cy.get("#loginLink").then(($link) => {
            return $link.text()
        }).as("linkText")
                
        cy.get("@linkText").then(($x) => {
            expect($x).is.eql("Login")
        })    
    
})

And("I enter username {string} and password {string}", (uname, pwd) => {
    cy.Login()
})

Given("I login using the data table:", (datatable) => {
    datatable.hashes().forEach(row => {
        cy.get('#UserName').type(row.username)
        cy.get("#Password").type(row.password, {log:false})
    });

    cy.get('.btn').click()
})
