const DATE_REGEX1 = /\d{1,2}(-|\/)\d{1,2}(-|\/)\d{2,4}/gi;
const DATE_REGEX2 = /\d{2,4}(-|\/)\d{1,2}(-|\/)\d{1,2}/gi;

const formatFns = {
  longFormat(args) {
    if (!["DD-MM-YYYY", "Day Month Year"].includes(args)) {
      return { status: false, msg: "Invalid Format" };
    }
    return { status: true, msg: null };
  },
  simpleFormat(args) {
    if (!["D", "M", "Y"].includes(args)) {
      return { status: false, msg: "Invalid Format" };
    }
    return { status: true, msg: null };
  },
  deepFormat(_date, sep) {
    let date;
    let spl = String(_date).split(sep);
    let cond = spl[0].length > spl[spl.length - 1].length;

    switch (cond) {
      case true:
        date = spl.join(", ");
        break;
      case false:
        date = spl.reverse().join(", ");
        break;
    }

    return new Date(date);
  },
  locateSep(date) {
    let sep = "";
    const indexOfDash = String(date).indexOf("-");
    const indexOfBackSlash = String(date).indexOf("/");
    if (indexOfDash > -1) sep = "-";
    if (indexOfBackSlash > -1) sep = "/";
    return sep;
  },
};

export const Validate = {
  format(args, fn) {
    return formatFns[fn](args);
  },
  date(date) {
    if (DATE_REGEX1.test(date) || DATE_REGEX2.test(date)) {
      let _date = formatFns.deepFormat(date, formatFns.locateSep(date));
      return { msg: null, status: true, date: _date };
    }

    if (new Date(date).toString() == "Invalid Date") {
      return { status: false, msg: "Invalid Date", date: null };
    }

    return { msg: null, status: true, date: date };
  },
};
