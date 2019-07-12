context('Actions', () => {
    beforeEach(() => {
        // cy.visit('/iframeapp.html')
        cy.visit("/cypress/iframeapp.html")
    })

    it("Perform iFrame data entry", () => {
        cy.get("#txtName").type("Cypress");

        // cy.get("#frame").then($iframe => {
        //     const $body = $iframe.contents().find('body');
        //     //store into alias
        //     cy.wrap($body).as('iframe')
        // })

        // Get the iframe. Equivalent to switching to iframe in Selenium
        cy.get("#frame").then(theIFrame => {
            // get th eiframe contents
            const iframeBody = theIFrame.contents().find("body")
            cy.wrap(iframeBody).as("iframeContent")
        })

        cy.get("@iframeContent").find("#txtNameWithiniFrame").type("typing text into iframe")

        cy.get("@iframe").find("#txtNameWithiniFrame").type("text within iframe");
    })
});