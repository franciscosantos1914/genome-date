import chai from "chai";
const assert = chai.assert;
import { format } from "../implementations/format.js";

describe("format unit tests 🚀", () => {
  it("should return invalid format", () => {
    const format1 = format(new Date(), "test");
    const format2 = format(new Date(), {});
    assert.equal(format1, "Invalid Format");
    assert.equal(format2, "Invalid Format");
  });
  it("should retrieve invalid date", () => {
    const wrongDate1 = format({}, "DD-MM-YYYY");
    const wrongDate2 = format("test", "Day Month Year");
    assert.equal(wrongDate1, "Invalid Date");
    assert.equal(wrongDate2, "Invalid Date");
  });
  it("should retrieve right date format", () => {
    const date1 = format(new Date(), "DD-MM-YYYY");
    const date2 = format(date1, "Day Month Year");
    const date3 = format("2023-05-03", "Day Month Year");
    assert.equal(date1, "22-05-2023");
    assert.equal(date2, "22 de maio de 2023");
    assert.equal(date3, "3 de maio de 2023");
  });
});
