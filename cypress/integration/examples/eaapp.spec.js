describe("Test EA Application", () => {
    before("Login to application", () => {
        cy.visit("http://eaapp.somee.com/")

        // Go to the login page
        cy.contains("Login").click()
        cy.url().should("include", "/Account/Login")

        //Get an element and store its reference in an alias using a Promise
        cy.get("#loginLink").then(($link) => {
            return $link.text()
        }).as("linkText")
                
        cy.get("@linkText").then(($x) => {
            expect($x).is.eql("Login")
        })

        cy.Login()
    })

    it("Performing Benefit Check", () => {
        cy.contains("Employee List").click()
        // cy.get('.table').find('tr').contains("Karthik").parent().contains("Benefits").click()

        // Access the environment variable "var1" from the environment variables defined in cypress.json
        /*cy.get('.table').find('tr').contains("Karthik").parent().contains(Cypress.env("var1")).click()*/

        // Using aliasing to find and click through the rows of a table
        cy.get('.table').find('tr').as("rows")
        cy.get("@rows").then(($theRows) => {
            cy.wrap($theRows).click({multiple:true})
        })

        // Using wrap command to yield the properties (and functions) of an object. An alternative to: 
        // cy.get('.table').find('tr').contains("Karthik").parent().contains("Benefits").click()
        cy.get('.table').find('tr > td').then(($tds) => {
            // Interested in the td that has "John", yield it and get it's parent element which is the row. Click on the Benefits link
            cy.wrap($tds).contains("John").invoke("wrap").parent().contains("Benefits").click()
        })

    })
})