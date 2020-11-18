// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'app should work': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('#app departments-container', 5000)
      .waitForElementVisible('.content-wrapper  product-user-input', 5000)
      .waitForElementVisible('.content-wrapper  button-submit', 5000)
      .pause(4000)
      .setValue('.content-wrapper  product-user-input', 'sa')
      .click('.content-wrapper  button-submit', 5000)
      .waitForElementVisible('.spin .loading-text', 5000)
      .pause(4000)
      .end()
  }
}
