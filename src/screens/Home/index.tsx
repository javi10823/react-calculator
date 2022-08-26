import React, { useState } from "react";
import Keyboard from "../../components/Keyboard";
import Visor from "../../components/Visor";
import { calculate } from "../../utils/calculator";
import styles from "./styles.module.css";

const Home = () => {
  const [result, setResult] = useState<number | null>(null);
  const [equation, setEquation] = useState<string>("");

  const onCharAdd = (string: string) => setEquation(equation + string);
  const onClear = () => {
    setEquation("");
    setResult(null);
  };
  const onErase = () =>
    setEquation(
      equation
        .split("")
        .splice(0, equation.length - 1)
        .join("")
    );
  const onResult = () => setResult(calculate(equation));

  return (
    <div className={styles.container}>
      <Visor result={result} equation={equation} />
      <Keyboard
        onCharAdd={onCharAdd}
        onClear={onClear}
        onErase={onErase}
        onResult={onResult}
      />
    </div>
  );
};

export default Home;
