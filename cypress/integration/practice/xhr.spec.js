describe("Test LambdaTest Website XHR", () => {

    beforeEach("Go to the login page", () => {
        cy.visit("https://accounts.lambdatest.com/login")
    })
    
    it("Perform login and verify response using XHR", () => {
        // Start the proxy servcer that will intercept XMLHttpRequests that cy.route() generates.
        // This server will forward the request on to the actual endpoint https://accounts.lambdatest.com/api/user ...
        cy.server()

        // Use cy.route() to manage the behaviour of (XMLHttpRequests) network requests sent by cypress 
        // Send a GET request to the team end point
        cy.route({
            method: 'GET',
            url: 'api/user/organization/team'
        }).as('team')

        cy.route({
            method: 'GET',
            url: 'api/user/organization/automation-test-summary'
        }).as('apiCheck')

        cy.LoginToLambdatest()

        // Make assertions on the response using explicit assertions - Response code is OK, JSON body property values
        cy.get("@team").then((xhrResponse) => {
            expect(xhrResponse.status).to.eq(200)
            expect(xhrResponse.response.body.data[0]).to.have.property("name")
            expect(xhrResponse.response.body.data[0]).to.have.property("name", "Test User")
        })
        
        // Making assertions on the Response using implicit assertions
        cy.get("@apiCheck").its("response.body").should("have.property", "maxQueue").and("eq", 10)
    })

    it("Verify cookies", () => {
        cy.LoginToLambdatest()

        cy.getCookie("user_id").should("have.property", "value", "80099")
    })
})
