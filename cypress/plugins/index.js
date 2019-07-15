// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const cucumber = require('cypress-cucumber-preprocessor').default

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing). RIBAKE: This is where we define events that 
// Cypress should fire by itself during the time that it is running, and the handlers
// for such events 

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  // Cypress internally performs actions that fire the before:browser:launch event before launching the browser. 
  // The below hooks into the event to configure settings that will cause the browser to be launched in fullscreen mode.
  on('before:browser:launch', (browser = {}, args) => {
    // For electron browser, set up and return the args variable that the runner would use
    if(browser.name === 'electron') {
      // args.push('--start-fullscreen')
      args['fullscreen'] = false
      return args
    }

    // Because chrome is going to be used with the Cypress command line, args would be available and we can push to it 
    if(browser.name === 'chrome') {
      args.push('--start-fullscreen')
      // Incognito mode would not run in Cypress as Cypress always starts with a new profile everytime, equating to incognito
      // args.push('--incognito')
      return args
    }
  })
}
