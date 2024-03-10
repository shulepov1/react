import { useState, useEffect, createContext } from "react";
import Words from "../../components/words/Words";

export const SkippedContext = createContext(null);

export default function Testpage() {
    const _words = [
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

    const [timer, setTimer] = useState(60);
    const [timeInterval, setTimeInterval] = useState(null);

    const [isTestActive, setIsTestActive] = useState(false);

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
        setTimer(60);
        clearInterval(timeInterval);

        setIsCurrentWordWrong(false);
        setCurrentWordIndex(0);
        setWords(_words);
        setInputValue("");
        setIsTestActive(false);
    };

    useEffect(() => {
        if (inputValue === "") {
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

    return (
        <div>
            <div className="App">
                <h3>Timer: {timer}</h3>
                <div className="btn-wrapper">
                    {/* Button to start the timer */}
                    <button onClick={startTimer}>Start</button>
                    {/* Button to pause the timer */}
                    <button onClick={pauseTimer}>Pause</button>
                    {/* Button to reset the timer */}
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
        </div>
    );
}
