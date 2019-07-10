/// <reference types="Cypress" />

describe("Testing of EA App", () => {

    before("Call for a paricular it block", () => {
        cy.visit("http://www.executeautomation.com/site")
    })

    it.only("Testing EA Site for assertion", () => {
        // cy.visit("http://www.executeautomation.com/site")
        cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should('have.class', 'ls-nav-active')

        cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should(($x) => {
            expect($x).to.have.class("ls-nav-active")
        })
    })
    
    it("Login application", () => {
        cy.visit("http://eaapp.somee.com/")
        cy.contains("Login").click()

        cy.url().should("include", "/Account/Login")

        //Get an element and store its reference in an alias using a Promise
        cy.get("#loginLink").then(($link) => {
            return $link.text()
        }).as("linkText")
        
        cy.get("@linkText").then(($x) => {
            expect($x).is.eql("Login")
        })       

        cy.get('#UserName').type("admin")
        cy.get('#Password').type("password")
        cy.get('.btn').click({force: true})

        cy.contains("Employee List").click()
        // cy.get('.table').find('tr').contains("Karthik").parent().contains("Benefits").click()

        // Using aliasing to find and click through the rows of a table
        cy.get('.table').find('tr').as("rows")
        cy.get("@rows").then(($theRows) => {
            cy.wrap($theRows).click({multiple:true})
        })

        // Using wrap command to yield the properties (and functions) of an object. An alternative to: 
        // cy.get('.table').find('tr').contains("Karthik").parent().contains("Benefits").click()
        cy.get('.table').find('tr > td').then(($tds) => {
            // Interested in thee td that has "John", yield it and get it's parent element which is the row. Click on the Benefits link
            cy.wrap($tds).contains("John").invoke("wrap").parent().contains("Benefits").click()
        })

    })
})
