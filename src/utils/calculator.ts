export const calculate = (equation: string) => {
  try {
    if (!/(\d+[+\-*/])*(\d+)/.test(equation)) return null;
    // eslint-disable-next-line no-eval
    const result = eval(equation);
    if (typeof result === "number") return result;
    else return null;
  } catch {
    return null;
  }
};
