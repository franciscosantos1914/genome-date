import chai from "chai";
const assert = chai.assert;
import { add } from "../implementations/add.js";

describe("add unit tests 🚀", () => {
  it("should validate date", () => {
    const date1 = add({}, 12, "D");
    const date2 = add("mock", 5, "Y");
    const date3 = add(new Date(), 5, "tests");
    const date4 = add(new Date(), 5, () => {});
    assert.equal(date1, "Invalid Date");
    assert.equal(date2, "Invalid Date");
    assert.equal(date3, "Invalid Format");
    assert.equal(date4, "Invalid Format");
  });
});
