import chai from "chai";
const assert = chai.assert;
import { lightDate } from "../implementations/light-date.js";

describe("light date integration tests 🚀", () => {
  it("should format date", () => {
    const date1 = lightDate().format("DD-MM-YYYY");
    const date2 = lightDate({}).format("DD-MM-YYYY");
    const date3 = lightDate().format("DD");
    assert.equal(date1, "22-05-2023");
    assert.equal(date2, "Invalid Date");
    assert.equal(date3, "Invalid Format");
  });
  it("should return the greater", () => {
    const date1 = lightDate(new Date()).isGreaterThan("22-04-2023");
    const date2 = lightDate("22-04-2023").isGreaterThan(new Date());
    const date3 = lightDate({}).isGreaterThan("22-04-2023");
    const date4 = lightDate(new Date()).isGreaterThan("aaa");

    assert.isTrue(date1);
    assert.isFalse(date2);
    assert.equal(date3, "Invalid Date");
    assert.equal(date4, "Invalid Date");
  });
  it("should add date", () => {
    const date1 = lightDate(new Date()).add(2, "D");
    const date2 = lightDate(new Date()).add(2, "M");
    const date3 = lightDate(new Date()).add(2, "Y");

    const date7 = lightDate([]).add(2, "D");
    const date8 = lightDate(new Date()).add("kkk", "D");
    const date9 = lightDate(new Date()).add("3", "MMMM");

    assert.equal(date1, "24-05-2023");
    assert.equal(date2, "22-07-2023");
    assert.equal(date3, "22-05-2025");

    assert.equal(date7, "Invalid Date");
    assert.equal(date8, "22-05-2023");
    assert.equal(date9, "Invalid Format");
  });
  it("should subtract date", () => {
    const date1 = lightDate(new Date()).subtract(2, "D");
    const date2 = lightDate(new Date()).subtract(2, "M");
    const date3 = lightDate(new Date()).subtract(2, "Y");

    const date7 = lightDate([]).subtract(2, "D");
    const date8 = lightDate(new Date()).subtract("kkk", "D");
    const date9 = lightDate(new Date()).subtract("3", "MMMM");

    assert.equal(date1, "20-05-2023");
    assert.equal(date2, "22-03-2023");
    assert.equal(date3, "22-05-2021");

    assert.equal(date7, "Invalid Date");
    assert.equal(date8, "22-05-2023");
    assert.equal(date9, "Invalid Format");
  });
});
