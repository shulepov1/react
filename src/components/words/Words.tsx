import Word from "./Word";

export default function Words({
    words,
    currentWordIndex,
    isWordWrong,
    isLoading,
    isFetching,
    isError,
    error,
}) {
    if (isLoading || isFetching) return <h1>Loading...</h1>;
    if (isError) {
        console.log(error.message);
        return <h1>Error!</h1>;
    }
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
