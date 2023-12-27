export function formatDate(date: string) {
  const newDate = new Date(date);
  const formated = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formated.format(newDate);
}
