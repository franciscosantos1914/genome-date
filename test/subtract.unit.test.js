import chai from "chai";
const assert = chai.assert;
import { subtract } from "../implementations/subtract.js";

describe("subtract unit tests 🚀", () => {
  it("should validate date", () => {
    const date1 = subtract({}, 12, "D");
    const date2 = subtract("mock", 5, "Y");
    const date3 = subtract(new Date(), 5, "tests");
    const date4 = subtract(new Date(), 5, () => {});
    assert.equal(date1, "Invalid Date");
    assert.equal(date2, "Invalid Date");
    assert.equal(date3, "Invalid Format");
    assert.equal(date4, "Invalid Format");
  });
});
