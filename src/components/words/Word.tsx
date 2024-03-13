import { forwardRef } from "react";
import styles from "./word.module.css";
import WordType from "../../types/WordType";

type WordProps = { word: WordType; isCurrent: boolean; isWordWrong: boolean };

const Word = forwardRef<HTMLDivElement, WordProps>(
    ({ word, isCurrent, isWordWrong }: WordProps, ref) => {
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
            wordWrapClass = isWordWrong
                ? styles.wordWrongWrap
                : styles.wordWrap;
        }

        return (
            <div className={wordWrapClass}>
                <div ref={wordRef} className={wordClass}>
                    {word.text}
                </div>
            </div>
        );
    }
);

export default Word;
