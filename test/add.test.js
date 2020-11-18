const expect = require('chai').expect;
require("mocha-allure-reporter");
const {webdriver, Builder, By, Key, until} = require('selenium-webdriver');
const add = require('../index');


describe("simple test demo", function ()  {
    // Example of step definition. `allure.createStep` wraps any function and then every
    // call of it will be recorded and displayed in report.
    
    this.timeout(10000)
    before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    });

    const testStep = allure.createStep("initial", () => {
      // do something
      
    });
    // If step will throw an exception or return a rejected promise, it will be marked as broken
    // in the report, and also  will fail the test
    const stepToBreak = allure.createStep("break test", () => {
      throw new Error("Make test broken");
    });
  
    it("simple passed test", async () => {
        await driver.get("https://google.com");
        testStep();
    });
  
    it("test with step", () => {
      testStep();
      stepToBreak();
    });
  
    it("failed test", () => {
      expect(false).to.equal(true);
    });
  });