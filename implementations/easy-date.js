import { add as _add } from "./add.js";
import { format as _format } from "./format.js";
import { subtract as _subtract } from "./subtract.js";
import { isGreaterThan as _isGreaterThan } from "./is-greater-than.js";

let symbol = Symbol();

export const easyDate = (date = new Date()) =>
  new (class {
    constructor(date) {
      symbol = date;
    }

    format(args) {
      if (["Invalid Date", "Invalid Format"].includes(symbol)) return symbol;
      return _format(symbol, args);
    }

    isGreaterThan(date) {
      return _isGreaterThan(symbol, date);
    }

    add(number, format) {
      let num = isNaN(Number(number)) ? 0 : Number(number);
      symbol = _add(symbol, num, format);
      return { format: this.format };
    }

    subtract(number, format) {
      let num = isNaN(Number(number)) ? 0 : Number(number);
      symbol = _subtract(symbol, num, format);
      return { format: this.format };
    }
  })(date);
