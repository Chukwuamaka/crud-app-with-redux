export const generateUniqueId = (): string => {
  const randomNumber = Date.now() * Math.random();
  const id = randomNumber.toString().slice(0, 5);
  return id;
}