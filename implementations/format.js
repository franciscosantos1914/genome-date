import { Validate } from '../helpers'

export function format(args) {
  const { status, msg } = Validate.format(args, "longFormat");
  if (status === false) return msg;
  const formatStrategy = {
    "DD-MM-YYYY": (date) => {
      return new Date(date)
        .toLocaleDateString("pt-br", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })
        .split("/")
        .reverse()
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
