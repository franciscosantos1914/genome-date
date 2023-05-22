import { format as _format } from "./format.js";
import { Validate } from "../helpers/validator.js";
import { datefns } from "../helpers/date-fns.js";

export function add(date, number, format) {
  const checkDate = Validate.date(date);
  const checkFormat = Validate.format(format, "simpleFormat");

  if (checkDate.status === false) return checkDate.msg;
  if (checkFormat.status === false) return checkFormat.msg;

  if (checkDate.dates.length > 0) date = checkDate.dates[0];

  const fn = datefns[format];
  date[fn.setter](date[fn.getter]() + number);
  return { format: _format };
}
