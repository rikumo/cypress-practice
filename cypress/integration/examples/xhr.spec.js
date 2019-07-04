describe("Test LambdaTest Website XHR", () => {
    
    it("Perform login and verify response using XHR", () => {
        // get the password from the file in fixtures folder
        cy.fixtures("lambdauser").as("user")

        cy.get("@user").then((theuser) => {
            // the code that needs to access the alias needs to be within this lambda
            cy.get("[name='email']").debug().type(theuser.username)
            cy.get("[name='password']").debug().type(theuser.password, {log:false})
        })
        
    })
})
