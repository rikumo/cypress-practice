/// <reference types="Cypress" />

context("Handle alerts and popups with Cypress", () => {
    beforeEach(() => {
        cy.visit("http://executeautomation.com/demosite/Login.html")
    })

    it("Perform login and handle alerts", () => {
        cy.get("[name='UserName']").type("admin")
        cy.get("[name='Password']").type("password")
        cy.get(":nth-child(3) > input").click()

        // Causes the alert to pop up, which automatically generates the window:confirm event
        cy.get("[name='generate']").click()
        debugger

        // Handles that event and trigger an OK (return true) or Cancel (return false)
        cy.on("window:confirm", (str) => {
            expect(str).to.eq("You generated a Javascript alert")
            // return false
            return true
        })
    })
})