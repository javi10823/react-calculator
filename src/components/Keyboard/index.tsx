import KeyboardKey from "../KeyboardKey";
import styles from "./styles.module.css";
import { KeyboardProps } from "./types";

const Keyboard = ({ onCharAdd, onClear, onErase, onResult }: KeyboardProps) => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.col}>
        <KeyboardKey content="AC" color="primary" onClick={onClear} />
      </div>
      <div className={styles["col-2"]}>
        <KeyboardKey content="⌫" color="primary" onClick={onErase} />
      </div>
      <div className={styles.col}>
        <KeyboardKey
          content="÷"
          color="primary"
          onClick={() => onCharAdd && onCharAdd("/")}
        />
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.col}>
        <KeyboardKey content="7" onClick={() => onCharAdd && onCharAdd("7")} />
      </div>
      <div className={styles.col}>
        <KeyboardKey content="8" onClick={() => onCharAdd && onCharAdd("8")} />
      </div>
      <div className={styles.col}>
        <KeyboardKey content="9" onClick={() => onCharAdd && onCharAdd("9")} />
      </div>
      <div className={styles.col}>
        <KeyboardKey
          content="*"
          color="primary"
          onClick={() => onCharAdd && onCharAdd("*")}
        />
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.col}>
        <KeyboardKey content="4" onClick={() => onCharAdd && onCharAdd("4")} />
      </div>
      <div className={styles.col}>
        <KeyboardKey content="5" onClick={() => onCharAdd && onCharAdd("5")} />
      </div>
      <div className={styles.col}>
        <KeyboardKey content="6" onClick={() => onCharAdd && onCharAdd("6")} />
      </div>
      <div className={styles.col}>
        <KeyboardKey
          content="-"
          color="primary"
          onClick={() => onCharAdd && onCharAdd("-")}
        />
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.col}>
        <KeyboardKey content="1" onClick={() => onCharAdd && onCharAdd("1")} />
      </div>
      <div className={styles.col}>
        <KeyboardKey content="2" onClick={() => onCharAdd && onCharAdd("2")} />
      </div>
      <div className={styles.col}>
        <KeyboardKey content="3" onClick={() => onCharAdd && onCharAdd("3")} />
      </div>
      <div className={styles.col}>
        <KeyboardKey
          content="+"
          color="primary"
          onClick={() => onCharAdd && onCharAdd("+")}
        />
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.col}>
        <KeyboardKey content="0" onClick={() => onCharAdd && onCharAdd("0")} />
      </div>
      <div className={styles.col}>
        <KeyboardKey content="." onClick={() => onCharAdd && onCharAdd(".")} />
      </div>
      <div className={styles["col-2"]}>
        <KeyboardKey content="=" background="primary" onClick={onResult} />
      </div>
    </div>
  </div>
);

export default Keyboard;
