import styles from "./results.module.css";

export default function Results({ words }) {
    return (
        <div className={styles.results}>
            <h1>Results:</h1>
            <div className={styles.wpmWrap}>
                <span>WPM: </span>
                <span className={styles.wpmValue}>
                    {words.reduce((value, word) => {
                        if (word.ok) {
                            return value + 1;
                        }
                        return value;
                    }, 0)}
                </span>
            </div>
            <div className={styles.cols}>
                <div>
                    <p className={styles.colTitle}>correct words:</p>
                    <div className={styles.col}>
                        {words
                            .filter((word) => word.ok)
                            .map((word) => (
                                <div>{word.text}</div>
                            ))}
                    </div>
                </div>
                <div>
                    <p className={styles.colTitle}>skipped words:</p>
                    <div className={styles.col}>
                        {words
                            .filter((word) => word.skipped)
                            .map((word) => (
                                <div>{word.text}</div>
                            ))}
                    </div>
                </div>
                <div>
                    <p className={styles.colTitle}>
                        words where you made a mistake:
                    </p>
                    <div className={styles.col}>
                        {words
                            .filter((word) => word.mistaken)
                            .map((word) => (
                                <div>{word.text}</div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
