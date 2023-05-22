export const Validate = {
  format(args, fn) {
    return [fn](args);
  },
  date(...dates) {
    let isAnyDateInvalid = false;
    
    dates.forEach((date) => {
      if (new Date(date).toString() == "Invalid Date") {
        isAnyDateInvalid = true;
      }
    });

    if (isAnyDateInvalid) {
      return { status: false, msg: "Invalid Date" };
    }

    return { status: true, msg: null };
  },
};

function longFormat(args) {
  if (!["DD-MM-YYYY", "Day Month Year"].includes(args)) {
    return { status: false, msg: "Invalid Format" };
  }
  return { status: true, msg: null };
}

function simpleFormat(args) {
  if (!["D", "M", "Y"].includes(args)) {
    return { status: false, msg: "Invalid Format" };
  }
  return { status: true, msg: null };
}
