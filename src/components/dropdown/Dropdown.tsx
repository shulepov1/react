import styles from "./dropdown.module.scss";

export default function Dropdown({ children }) {
  return (
    <ul className={styles.dropdown}>
      <li>Sort By</li>
      <ul className={styles.optionsContainer}>{children}</ul>
    </ul>
  );
}
