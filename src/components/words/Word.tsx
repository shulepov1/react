import { forwardRef } from "react";
import styles from "./word.module.css";

const Word = forwardRef(({ word, isCurrent, isWordWrong }, ref) => {
    let wordWrapClass = styles.wordWrap;
    let wordClass = "";
    let wordRef = null;

    if (word.skipped === true) {
        wordClass = styles.wordWrongSkipped;
    } else if (word.ok === true) {
        wordClass = styles.wordOk;
    } else if (isCurrent) {
        wordRef = ref;
        wordClass = isWordWrong ? styles.wordWrong : styles.wordCurrent;
        wordWrapClass = isWordWrong ? styles.wordWrongWrap : styles.wordWrap;
    }

    return (
        <div className={wordWrapClass}>
            <div ref={wordRef} className={wordClass}>
                {word.text}
            </div>
        </div>
    );
});

export default Word;
