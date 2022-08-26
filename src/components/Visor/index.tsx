import { VisorProps } from "./types";
import styles from "./styles.module.css";

const Visor = ({ result, equation }: VisorProps) => (
  <div className={styles.container}>
    {result !== null && <div className={styles.result}>{result}</div>}
    <div
      className={result !== null ? styles.equation : styles.equationUnsolved}
    >
      {equation}
    </div>
  </div>
);

export default Visor;
