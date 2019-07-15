context('Actions', () => {
    beforeEach(() => {
        // If baseurl is not configured in cypress.json, Cypress launches electron browser against http://localhost:60661/cypress
        cy.visit("/cypress/iframeapp.html")
    })

    it("Perform iFrame data entry", () => {
        cy.get("#txtName").type("Cypress");

        // Get the iframe. Equivalent to switching to iframe in Selenium
        cy.get("#frame").then(theIFrame => {
            // get the iframe contents
            const iframeBody = theIFrame.contents().find("body")
            cy.wrap(iframeBody).as("iframeContent")
        })

        cy.get("@iframeContent").find("#txtNameWithiniFrame").type("typing text into iframe")

    })
});