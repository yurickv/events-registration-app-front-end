export const formatDate = (dateString) => {
  const formattedDate = new Date(dateString);
  const day = formattedDate.getDate().toString().padStart(2, "0");
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
  const year = formattedDate.getFullYear();
  return `${day}-${month}-${year}`;
};
