const toUpperCase = require("march12-test-hello-world-product-gang-sync");

describe("toUpperCase function", () => {
  it("should convert a string to uppercase", () => {
    const inputString = "hello npm";

    const result = toUpperCase(inputString);

    expect(result).toBe("HELLO NPM");
  });
});
