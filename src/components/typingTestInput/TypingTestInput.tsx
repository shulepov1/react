export default function TypingTestInput({
    isInputDisabled,
    inputValue,
    handleInput,
    setLatestKeyDown,
}) {
    return (
        <div>
            <input
                autoFocus
                disabled={isInputDisabled}
                type="text"
                value={inputValue}
                onChange={handleInput}
                onKeyDown={(e) => {
                    setLatestKeyDown(e.key);
                }}
            />
        </div>
    );
}
