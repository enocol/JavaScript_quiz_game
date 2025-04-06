// const { loadQuestion, shuffleArray } = require("./assets/js/index.js");
import loadQuestion from "./assets/js/index.js";
import shuffleArray from "./assets/js/index.js";

describe("loadQuestion function", () => {
  it("should be defined", () => {
    expect(loadQuestion).toBeDefined();
  });
});

// Test for the shuffleArray function

describe("shuffleArray function", () => {
  it("should be defined", () => {
    expect(shuffleArray).toBeDefined();
  });
});
