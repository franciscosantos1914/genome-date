import { add, format, subtract, isGreaterThan } from ".";

export const lightDate = (date = new Date()) =>
  new (class {
    #date;

    constructor(date) {
      this.#date = date;
    }

    format(args) {
      return format(args);
    }

    isGreaterThan(date) {
      return isGreaterThan(this.#date, date);
    }

    add(number, format) {
      return add(this.#date, Number(number), format);
    }

    subtract(number, format) {
      return subtract(this.#date, Number(number), format);
    }
  })(date);
