export const getRandomPosition = () => {
 const position = Math.floor(Math.random() * 500);
 const sign = Math.random() < 0.5 ? -1 : 1;
 return sign * position;
};