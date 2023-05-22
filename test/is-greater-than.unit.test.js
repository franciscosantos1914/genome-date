import chai from "chai";
const assert = chai.assert;
import { isGreaterThan } from "../implementations/is-greater-than.js";

describe("is greater than unit tests 🚀", () => {
  it("should return invalid date", () => {
    const bool1 = isGreaterThan({}, new Date());
    const bool2 = isGreaterThan(new Date(), () => {});
    const bool3 = isGreaterThan("test", "testing");
    assert.equal(bool1, "Invalid Date");
    assert.equal(bool2, "Invalid Date");
    assert.equal(bool3, "Invalid Date");
  });
  it("should compare dates and return the greater", () => {
    //const bool1 = isGreaterThan("22-05-2023", "20-04-2023");
    //assert.isTrue(bool1);
    const bool2 = isGreaterThan("20-04-2023", "22-05-2023");
    assert.isFalse(bool2);
  });
});
