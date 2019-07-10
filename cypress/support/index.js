// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Bring in the cypress dark theme plugin I have installed
// require('cypress-dark') - looks to cause cypress cache to be corrupt. To fix this, issue npm cache clear --force. Then reinstall cypress

// Listen for uncaught exceptions in the Application Under Test and ignore such
Cypress.on("uncaught:exception", (err, runnable) => {
    return false
})

// Make cypress-xpath available
require("cypress-xpath")

// Import the Cypress file upload plugin
import 'cypress-file-upload'
