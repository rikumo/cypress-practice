describe("Test LambdaTest Website XHR", () => {

    before("Go to the login page", () => {
        cy.visit("https://accounts.lambdatest.com/login")
    })
    
    it("Perform login and verify response using XHR", () => {
        // Start the proxy servcer that will intercept XMLHttpRequests that cy.route() sends
        // cy.server()

        // Use cy.route() to manage the behaviour of (XMLHttpRequests) network requests sent by cypress 
        // Send a GET request to the team end point
        // cy.route({
        //     method: 'GET',
        //     url: 'api/user/organization/team'
        // }).as('team')

        // get the password from the file in fixtures folder
        cy.fixture("xhruser").as("user")

        cy.get("@user").then((theuser) => {
            // the code that needs to access the alias needs to be within this lambda
            cy.get("[name='email']").debug().type(theuser.username)
            cy.get("[name='password']", {timeout: 10000}).debug().type(theuser.password, { log: false })

        })
        
        cy.get('.btn').click()
        // cy.get("[class='btn btn-primary btn-lg btn-block mt-3']").debug().click()

        // Assert the response code is OK
        // cy.get("@team").then((xhrResponse) => {
        //     expect(xhrResponse.status).to.eq(200)
        //     expect(xhrResponse.response.body.data[0]).should.contain("name")
        //     expect(xhrResponse.response.body.data[0]).to.have.property("name")
        // })
        
    })
})
