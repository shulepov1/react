import { useState, useEffect, useContext, useRef } from "react";
import { AppContext } from "../../App";
import { useQuery } from "react-query";
import defaultWords from "../../data/defaultWords.ts";
import Words from "../../components/words/Words";
import Timer from "../../components/timer/Timer.js";
import Results from "../../components/results/Results.js";
import TypingTestInput from "../../components/typingTestInput/TypingTestInput.js";
import styles from "./ typingtest.module.css";

export default function TypingTestPage() {
    const { setActiveIndex } = useContext(AppContext);

    useEffect(() => {
        setActiveIndex(1);
    }, []);

    const prepareArray = (arr) => {
        const wordsArray = [...arr].map((word) => {
            return {
                text: word,
                skipped: false,
                mistaken: false,
                ok: false,
            };
        });
        return wordsArray;
    };

    const { isLoading, isError, isFetching, data, error, refetch } = useQuery(
        "words",
        () =>
            fetch("https://random-word-api.herokuapp.com/word?number=100")
                .then((response) => response.json())
                .catch((e) => {
                    setWords(prepareArray(defaultWords));
                })
    );

    useEffect(() => {
        if (data) {
            setWords(prepareArray(data));
            inputReference.current.focus();
        }
    }, [data]);

    const [isTestActive, setIsTestActive] = useState(false);

    const [words, setWords] = useState([]);
    const [displayWords, setDisplayWords] = useState(true);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isCurrentWordWrong, setIsCurrentWordWrong] = useState(false);

    const [inputValue, setInputValue] = useState("");
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [latestKeyDown, setLatestKeyDown] = useState("");
    const inputReference = useRef(null);

    const [timer, setTimer] = useState(10);
    const [timeInterval, setTimeInterval] = useState(null);

    const [displayResults, setDisplayResults] = useState(false);

    const startTimer = () => {
        setTimeInterval(
            setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000)
        );
    };
    const pauseTimer = () => {
        clearInterval(timeInterval);
    };
    const resetTimer = () => {
        setTimer(10);
        clearInterval(timeInterval);
    };

    const restartTest = () => {
        resetTimer();
        setIsCurrentWordWrong(false);
        setCurrentWordIndex(0);
        setIsInputDisabled(false);
        setInputValue("");
        setIsTestActive(false);
        setDisplayResults(false);
        setDisplayWords(true);
        refetch();
        // inputReference.current.focus();
    };

    useEffect(() => {
        if (timer === 0) {
            pauseTimer();
            setDisplayResults(true);
            setDisplayWords(false);
            setIsInputDisabled(true);
            setIsTestActive(false);
        }
    }, [timer]);

    useEffect(() => {
        if (inputValue === "" || words.length === 0) {
            setIsCurrentWordWrong(false);
            return;
        }
        if (latestKeyDown === " ") {
            if (inputValue === `${words[currentWordIndex].text} `) {
                setWords((words) => {
                    const newWords = [...words];
                    newWords[currentWordIndex].ok = true;
                    return newWords;
                });
            } else {
                setWords((words) => {
                    const newWords = [...words];
                    newWords[currentWordIndex].skipped = true;
                    return newWords;
                });
            }
            updateIndex();
            setInputValue("");
        } else {
            if (
                inputValue.length > words[currentWordIndex].text.length ||
                inputValue !==
                    words[currentWordIndex].text.slice(0, inputValue.length)
            ) {
                setWords((words) => {
                    const newWords = [...words];
                    newWords[currentWordIndex].mistaken = true;
                    return newWords;
                });
                setIsCurrentWordWrong(true);
            } else {
                setIsCurrentWordWrong(false);
            }
        }
    }, [inputValue]);

    const handleInput = (e) => {
        setInputValue(e.target.value);

        if (!isTestActive) {
            setIsTestActive(true);
            startTimer();
        }
    };

    const updateIndex = () => {
        setCurrentWordIndex((currentWordIndex) => {
            const newWordIndex = currentWordIndex + 1;
            if (newWordIndex >= words.length) {
                setWords((words) => {
                    const words2 = JSON.parse(JSON.stringify(words));
                    words2.forEach((word) => {
                        word.ok = false;
                        word.skipped = false;
                        word.mistaken = false;
                    });
                    return words.concat(words2);
                });
            }
            return newWordIndex;
        });
    };

    return (
        <main className={styles.main}>
            <div className={styles.test}>
                <Timer timer={timer} handleClick={restartTest}></Timer>
                {displayWords && (
                    <Words
                        words={words}
                        currentWordIndex={currentWordIndex}
                        isWordWrong={isCurrentWordWrong}
                        isLoading={isLoading}
                        isFetching={isFetching}
                        isError={isError}
                        error={error}
                    />
                )}
                <TypingTestInput
                    ref={inputReference}
                    isInputDisabled={isInputDisabled}
                    inputValue={inputValue}
                    handleInput={handleInput}
                    setLatestKeyDown={setLatestKeyDown}
                ></TypingTestInput>
                {displayResults && <Results words={words}></Results>}
            </div>
        </main>
    );
}
