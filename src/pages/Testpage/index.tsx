import { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from "../../App";
import Words from "../../components/words/Words";
import { useQuery } from "react-query";

export const SkippedContext = createContext(null);

export default function Testpage() {
    const { setActiveIndex } = useContext(AppContext);
    const { isPending, isError, isFetching, data, error, refetch } = useQuery(
        "words",
        () =>
            fetch("https://random-word-api.herokuapp.com/word?number=10").then(
                (response) => response.json()
            )
    );

    useEffect(() => {
        setActiveIndex(1);
    }, []);
    useEffect(() => {
        if (data) {
            const wordsArray = [...data].map((word) => {
                return {
                    text: word,
                    skipped: false,
                    mistaken: false,
                    ok: false,
                };
            });
            console.log(wordsArray);
            setWords(wordsArray);
        }
    }, [data]);

    let _words = [
        {
            text: "still",
            skipped: false,
            mistaken: false,
            ok: false,
        },
        {
            text: "little",
            skipped: false,
            mistaken: false,
            ok: false,
        },
        {
            text: "here",
            skipped: false,
            mistaken: false,
            ok: false,
        },
        {
            text: "own",
            skipped: false,
            mistaken: false,
            ok: false,
        },
        {
            text: "think",
            skipped: false,
            mistaken: false,
            ok: false,
        },
        {
            text: "data",
            skipped: false,
            mistaken: false,
            ok: false,
        },
    ];

    const [words, setWords] = useState(_words);
    const [inputValue, setInputValue] = useState("");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isCurrentWordWrong, setIsCurrentWordWrong] = useState(false);
    const [latestKeyDown, setLatestKeyDown] = useState("");

    const [timer, setTimer] = useState(10);
    const [timeInterval, setTimeInterval] = useState(null);

    const [isTestActive, setIsTestActive] = useState(false);

    const [displayResults, setDisplayResults] = useState(false);
    const [correctWordsCount, setCorrectWordsCount] = useState(0);

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

        setIsCurrentWordWrong(false);
        setCurrentWordIndex(0);
        setWords(_words);
        setInputValue("");
        setIsTestActive(false);
        setCorrectWordsCount(0);
        setDisplayResults(false);
        refetch();
    };

    useEffect(() => {
        console.log("TIMER", timer);
        if (timer === 0) {
            pauseTimer();
            setDisplayResults(true);
            setWords([]);
            setInputValue("");
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
                setCorrectWordsCount((count) => count + 1);
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

    const updateState = (e) => {
        setInputValue(e.target.value);

        if (!isTestActive) {
            console.log("started test");
            setIsTestActive(true);
            startTimer();
        }
    };

    const updateIndex = () => {
        setCurrentWordIndex((currentWordIndex) => {
            const newWordIndex = currentWordIndex + 1;
            if (newWordIndex >= words.length) {
                setIsCurrentWordWrong(false);
                setCurrentWordIndex(0);
                setWords(_words);
            }
            return newWordIndex;
        });
    };

    if (isPending || isFetching) return <h1>Loading...</h1>;
    if (isError) return <h1>Error!</h1>;
    return (
        <div>
            <div className="App">
                <h3>Timer: {timer}</h3>
                <div className="btn-wrapper">
                    {/* <button onClick={startTimer}>Start</button> */}
                    {/* <button onClick={pauseTimer}>Pause</button> */}
                    <button onClick={resetTimer}>Reset</button>
                </div>
            </div>
            <Words
                words={words}
                currentWordIndex={currentWordIndex}
                isWordWrong={isCurrentWordWrong}
            />
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={updateState}
                    onKeyDown={(e) => {
                        setLatestKeyDown(e.key);
                    }}
                />
            </div>
            {displayResults && (
                <div>
                    <div>{correctWordsCount}</div>
                </div>
            )}
        </div>
    );
}
