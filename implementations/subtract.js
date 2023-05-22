import { format as _format } from "./format";
import { Validate, datefns } from "../helpers";

export function subtract(date, number, format) {
  const checkDate = Validate.date(date);
  const checkFormat = Validate.format(format, "simpleFormat");

  if (checkDate.status === false) return checkDate.msg;
  if (checkFormat.status === false) return checkFormat.msg;

  const date = new Date(date);
  const fn = datefns[format];
  date[fn.setter](date[fn.getter]() - number);
  return { format: _format };
}
