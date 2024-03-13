import Word from "./Word";
import styles from "./words.module.css";
import { useRef, useEffect } from "react";

export default function Words({
    words,
    currentWordIndex,
    isWordWrong,
    isLoading,
    isFetching,
    isError,
    error,
}) {
    const wordsRef = useRef(null);
    const wordRef = useRef(null);
    useEffect(() => {
        if (wordRef.current) {
            const rect = wordRef.current.getBoundingClientRect();
            const rect2 = wordsRef.current.getBoundingClientRect();

            wordsRef.current.style.transform = `translateY(-${
                rect.y - rect2.y - 8
            }px)`;
        }
    }, [currentWordIndex]);

    if (isLoading || isFetching) return <h1>Loading...</h1>;
    if (isError) {
        console.log(error.message);
        return <h1>Error!</h1>;
    }
    return (
        <div className={styles.wordsWrap}>
            <div className={styles.words} ref={wordsRef}>
                {words.map((word, index) => {
                    return (
                        <Word
                            key={index}
                            word={word}
                            isCurrent={currentWordIndex === index}
                            isWordWrong={isWordWrong}
                            ref={currentWordIndex === index ? wordRef : null}
                        />
                    );
                })}
            </div>
        </div>
    );
}
