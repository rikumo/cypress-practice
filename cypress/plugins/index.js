// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing). RIBAKE: This is where we define events that 
// Cypress should fire by itself during the time that it is running, and the handlers
// for such events 
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  // Fire the before:browser:launch event. The handler maximises the browser
  on('before:browser:launch', (browser = {}, args) => {
    if(browser.name === 'electron' || browser.name === 'chrome') {
      args.push('--start-fullscreen')
    }
  })
}
// module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
// }

const cucumber = require('cypress-cucumber-preprocessor').default
