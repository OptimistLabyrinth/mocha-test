const assert = require("chai").assert;
const app = require("../src/app");

describe("App", () => {
  describe("function hello", () => {
    it('app.hello return "hello mocha!"', () => {
      const result = app.hello();
      assert.equal(result, "hello mocha!");
    });

    it("app.should return type string", () => {
      const result = app.hello();
      assert.typeOf(result, "string");
    });
  });

  describe("function addNumbers", () => {
    it("app.addNumbers should be above 5", () => {
      const result = app.addNumbers(5, 5);
      assert.isAbove(result, 5);
    });

    it("app.addNumbers should return type number", () => {
      const result = app.addNumbers(5, 5);
      assert.typeOf(result, "number");
    });
  });
});
