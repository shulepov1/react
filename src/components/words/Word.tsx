import styles from "./word.module.css";

export default function Word({ word, isCurrent, isWordWrong }) {
    if (word.skipped === true) {
        return <span className={styles.wordWrongSkipped}>{word.text}</span>;
    }
    if (word.ok === true) {
        return <span className={styles.wordOk}>{word.text}</span>;
    }
    if (isCurrent) {
        if (isWordWrong) {
            return <span className={styles.wordWrong}>{word.text}</span>;
        }
        return <span className={styles.wordCurrent}>{word.text}</span>;
    }
    return <span>{word.text}</span>;
}
