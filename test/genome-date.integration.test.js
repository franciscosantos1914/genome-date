import chai from "chai";
const assert = chai.assert;
import { genomeDate } from "../implementations/genome-date.js";

describe("light date integration tests 🚀", () => {

  it("should format date", () => {
    const date1 = genomeDate("2023, 05, 22").format("DD-MM-YYYY");
    const date2 = genomeDate({}).format("DD-MM-YYYY");
    const date3 = genomeDate().format("DD");
    assert.equal(date1, "22-05-2023");
    assert.equal(date2, "Invalid Date");
    assert.equal(date3, "Invalid Format");
  });
  it("should return the greater", () => {
    const date1 = genomeDate("22-05-2023").isGreaterThan("22-04-2023");
    //const date2 = genomeDate("22-04-2023").isGreaterThan("23-05-2023");
    const date3 = genomeDate({}).isGreaterThan("22-04-2023");
    const date4 = genomeDate("22-05-2023").isGreaterThan("aaa");

    assert.isTrue(date1);
    //assert.isFalse(date2);
    assert.equal(date3, "Invalid Date");
    assert.equal(date4, "Invalid Date");
  });
  it("should add date", () => {
    const date1 = genomeDate("22-05-2023").add(2, "D").format("DD-MM-YYYY");
    const date2 = genomeDate("22-05-2023").add(2, "M").format("DD-MM-YYYY");
    const date3 = genomeDate("22-05-2023").add(2, "Y").format("DD-MM-YYYY");

    const date7 = genomeDate([]).add(2, "D").format("DD-MM-YYYY");
    const date8 = genomeDate("22-05-2023").add("kkk", "D").format("DD-MM-YYYY");
    const date9 = genomeDate("22-05-2023").add("3", "MMMM").format("DD-MM-YYYY");

    assert.equal(date1, "24-05-2023");
    assert.equal(date2, "22-07-2023");
    assert.equal(date3, "22-05-2025");

    assert.equal(date7, "Invalid Date");
    assert.equal(date8, "22-05-2023");
    assert.equal(date9, "Invalid Format");
  });
  it("should subtract date", () => {
    const date1 = genomeDate("22-05-2023").subtract(2, "D").format("DD-MM-YYYY");
    const date2 = genomeDate("22-05-2023").subtract(2, "M").format("DD-MM-YYYY");
    const date3 = genomeDate("22-05-2023").subtract(2, "Y").format("DD-MM-YYYY");

    const date7 = genomeDate([]).subtract(2, "D").format("DD-MM-YYYY");
    const date8 = genomeDate("22-05-2023")
      .subtract("kkk", "D")
      .format("DD-MM-YYYY");
    const date9 = genomeDate("22-05-2023")
      .subtract("3", "MMMM")
      .format("DD-MM-YYYY");

    assert.equal(date1, "20-05-2023");
    assert.equal(date2, "22-03-2023");
    assert.equal(date3, "22-05-2021");

    assert.equal(date7, "Invalid Date");
    assert.equal(date8, "22-05-2023");
    assert.equal(date9, "Invalid Format");
  });
});
