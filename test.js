const { loadQuestion, shuffleArray } = require("./assets/js/index.js");

describe("loadQuestion function", () => {
  it("should be defined", () => {
    expect(loadQuestion).toBeDefined();
  });

  it("should be a function", () => {
    expect(typeof loadQuestion).toBe("function");
  });
});

// Test for the shuffleArray function

describe("shuffleArray function", () => {
  it("should be defined", () => {
    expect(shuffleArray).toBeDefined();
  });

  it("should be a function", () => {
    expect(typeof shuffleArray).toBe("function");
  });

  it("should return an array", () => {
    expect(Array.isArray(shuffleArray([]))).toBe(true);
  });
});
