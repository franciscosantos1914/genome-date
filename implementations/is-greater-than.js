import { Validate } from "../helpers";

export function isGreaterThan(date1, date2) {
  const { status, msg } = Validate.date(date1, date2);
  if (status === false) return msg;
  return new Date().getTime(date1) > new Date(date2).getTime();
}
