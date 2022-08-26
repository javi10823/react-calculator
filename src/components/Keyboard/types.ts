export type KeyboardProps = {
  onResult?: () => void;
  onClear?: () => void;
  onErase?: () => void;
  onCharAdd?: (char: string) => void;
};
