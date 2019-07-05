/// <reference types="Cypress" />

context("Cypress API testing using Fake JSON server backend", () => {
    it("GET functionality of JSON Server", () => {
        const response = cy.request("http://localhost:3000/posts/1").its("body")
        response.should("have.property", "id").and("equal", 1)
    })

    // This before would only apply to the `it` block following it
    before("DELETE the record posted to db.json before re-posting", () => {
        cy.request("DELETE", "http://localhost:3000/posts/2")
    })

    it("POST functionality of JSON Server", () => {
        cy.request("POST", "http://localhost:3000/posts", {
            "id": 2,
            "title": "Udemy Cypress course",
            "author": "Ribake I"
        }).then((response) => {
            expect(response.body).has.property("author", "Ribake I")
        })
    })

    // Logging into the labmda test website with a bad request to verify an error is returned 
    it("API Testing", () => {
        cy.request({
            method: "POST",
            url: "http://eaapp.somee.com/Account/Login",
            body: {
                "__RequestVerificationToken":"jJ27CGSB6SHC24F0oV5nGIcKmDPqG2WfwOCDZxTUIhJ8Tk9TiSYlzhrzuhP5Ct2rHTiOY46WawRVGy6qanY18HsdbKEeK0TqWjgOY9b6RZE1",
                "UserName": "admin",
                "Password": "password",
                "RememberMe": "false"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eql(500)
            expect(response.body).to.contain("<i>The required anti-forgery cookie &quot;__RequestVerificationToken&quot; is not present.</i>")
        })
    })
})