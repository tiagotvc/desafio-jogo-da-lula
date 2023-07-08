export const useStyles = () => {
  const alterStyles = (styleObj: unknown) => {
    return styleObj !== undefined ? styleObj : {};
  };

  return { alterStyles };
};
