var calc= require("../src/calc.js");

describe("a jasmine test", function () {
  it("tests that add works",
    function() {
      expect(calc.add(3,2)).toBe(5);
    }
  );
});
