import Word from "./Word";

export default function Words({ words, currentWordIndex, isWordWrong }) {
    return (
        <div>
            {words.map((word, index) => {
                return (
                    <Word
                        key={index}
                        word={word}
                        isCurrent={currentWordIndex === index}
                        isWordWrong={isWordWrong}
                    />
                );
            })}
        </div>
    );
}
