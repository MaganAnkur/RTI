export const getYear = (date: string) => {
  const currentDate = new Date(date);
  return currentDate.getUTCFullYear();
};
