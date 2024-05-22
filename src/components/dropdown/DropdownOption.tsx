import styles from "./dropdownOption.module.scss";

interface props {
  text: string;
  onClick: Function;
  isActive: boolean;
}

export default function DropdownOption({ text, onClick, isActive }: props) {
  return (
    <button onClick={() => onClick()} className={styles.dropdownOption}>
      <span className={isActive ? styles.optionTextActive : ""}>{text}</span>
    </button>
  );
}
