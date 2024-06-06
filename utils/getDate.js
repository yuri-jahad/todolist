export default () => {
  const date = new Date();
  const day = String(date.getDay()).padStart("0", 2);
  const month = String(date.getMonth()).padStart("0", 2);
  const year = String(date.getFullYear()).padStart("0", 2);
  const dateFormated = `${day}/${month}/${year}`;

  return dateFormated;
};
