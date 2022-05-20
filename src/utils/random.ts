const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default () => {
  try {
    return `iy67fa${generateRandomNumber(10, 60)}hvmerc${generateRandomNumber(10, 90)}`;
  } catch (error) {
    console.error("Error generating random");
    throw error;
  }
};
