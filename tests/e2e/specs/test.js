// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  應顯示程式標題與輸入欄位: browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible(".todoapp", 5000)
      .assert.elementPresent(".header")
      .assert.containsText("h1", "todos")
      .assert.elementPresent("input.new-todo")
      .end();
  }
};
