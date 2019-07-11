/// <reference types="Cypress"/>

context("Cypress Tidbits File upload Actions", () => {
    beforeEach(() => {
        cy.visit("https://fineuploader.com/demos.html")
    })

    // I keep getting a CORS error from the website. Not sure how to resolve this. Will research in community
    it("File upload demo", () => {
        cy.fixture("FileUpload.PNG", "base64").then(fileContent => {
            cy.get("#fine-uploader-s3 > .qq-uploader-selector > .qq-upload-button-selector > input").upload({
                fileContent,
                fileName: "FileUpload.PNG",
                mimeType: "image/png",
                encoding: "utf-8"
            },
            { 
                subjectType: "drag-n-drop"
            })
        })
    })
})

