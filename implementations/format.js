import { Validate } from "../helpers/validator.js";

export function format(date, args) {
  const checkDate = Validate.date(date);
  const checkFormat = Validate.format(args, "longFormat");

  if (checkDate.status === false) return checkDate.msg;
  if (checkFormat.status === false) return checkFormat.msg;

  date = checkDate.date;

  const formatStrategy = {
    "DD-MM-YYYY": (date) => {
      return new Date(date)
        .toLocaleDateString("pt-br", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })
        .split("/")
        .join("-");
    },
    "Day Month Year": (date) => {
      return new Date(date).toLocaleDateString("pt-br", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    },
  };
  return formatStrategy[args](date);
}
