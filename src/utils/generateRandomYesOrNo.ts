export const getRandomYesOrNo = () => {
  const randomChance = Math.random();

  if (randomChance <= 0.3) {
    return "SIM";
  } else {
    return "NÃO";
  }
};
