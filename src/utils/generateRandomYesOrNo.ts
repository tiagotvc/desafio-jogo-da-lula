export const getRandomYesOrNo = () => {
  const randomIndex = Math.random() < 0.5 ? 0 : 1;
  const options = ["SIM", "NÃO"];
  return options[randomIndex];
};
