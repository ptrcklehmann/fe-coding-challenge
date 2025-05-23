type FormattedDate = {
  date: string;
  dayOfTheWeek: string;
};

export const getFormattedDate = (date: string | null): FormattedDate => {
  const daysOfWeek = [
    "Sontag",
    "Montag",
    "Dienstag",
    "Mitwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];

  if (!date) {
    return {
      date: "",
      dayOfTheWeek: "",
    };
  }

  const dateObj = new Date(date);
  const dayIndex = dateObj.getDay();
  const formattedDate = `${dateObj.getDate().toString().padStart(2, "0")}.${(
    dateObj.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}`;

  return {
    date: formattedDate,
    dayOfTheWeek: daysOfWeek[dayIndex],
  };
};
