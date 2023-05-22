import { Validate } from "../helpers/validator.js";

export function isGreaterThan(date1, date2) {
  let _date1 = date1;
  let _date2 = date2;

  const checkDate1 = Validate.date(date1);
  const checkDate2 = Validate.date(date2);

  if (checkDate1.status === false) return checkDate1.msg;
  if (checkDate2.status === false) return checkDate2.msg;

  _date1 = checkDate1.date;
  _date2 = checkDate2.date;

  const milisec1 = new Date(_date1).getTime();
  const milisec2 = new Date(_date2).getTime();

  const bool = milisec1 > milisec2;
  return bool;
}
