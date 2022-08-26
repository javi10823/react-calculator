import { KeyboardKeyProps } from "./types";
import styles from "./styles.module.css";
import { MouseEventHandler } from "react";

const KeyboardKey = ({
  color,
  background,
  content,
  onClick,
}: KeyboardKeyProps) => (
  <button
    onClick={onClick as MouseEventHandler<HTMLButtonElement>}
    className={`${styles.container} ${
      color === "primary" ? styles.primary : ""
    } ${background === "primary" ? styles.bgPrimary : ""}`}
  >
    {content}
  </button>
);

export default KeyboardKey;
