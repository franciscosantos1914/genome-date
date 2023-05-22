import { add } from "./add.js";
import { format } from "./format.js";
import { subtract } from "./subtract.js";
import { isGreaterThan } from "./is-greater-than.js";

export const lightDate = (date = new Date()) =>
  new (class {
    #date;

    constructor(date) {
      this.#date = date;
    }

    format(args) {
      return format(this.#date, args);
    }

    isGreaterThan(date) {
      return isGreaterThan(this.#date, date);
    }

    add(number, format) {
      let num = isNaN(Number(number)) ? 0 : Number(number);
      return add(this.#date, num, format);
    }

    subtract(number, format) {
      let num = isNaN(Number(number)) ? 0 : Number(number);
      return subtract(this.#date, num, format);
    }
  })(date);
