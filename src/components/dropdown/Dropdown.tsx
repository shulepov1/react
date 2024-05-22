import { ReactNode } from "react";
import styles from "./dropdown.module.scss";

interface props {
  children: ReactNode[];
}

export default function Dropdown({ children }: props) {
  return (
    <ul className={styles.dropdown}>
      <li>Sort By</li>
      <ul className={styles.optionsContainer}>{children}</ul>
    </ul>
  );
}
