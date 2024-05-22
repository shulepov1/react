import { Fragment } from "react";
import styles from "./dropdownOption.module.scss";

export default function DropdownOption({ text, onClick, isActive }) {
  return (
    <button onClick={onClick} className={styles.dropdownOption}>
      <span className={isActive ? styles.optionTextActive : ""}>{text}</span>
    </button>
  );
}
