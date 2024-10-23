export const handleError = (error) => {
  console.error(error);
  throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};
