export const getResult = (value: number): string => {
  if (value % 15 === 0) {
    return "0";
  } else if (value % 5 === 0) {
    return "1";
  } else if (value % 3 === 0) {
    return "2";
  } else {
    return "3";
  }
};
