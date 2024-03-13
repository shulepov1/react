import styles from "./input.module.css";
import { forwardRef } from "react";

const TypingTestInput = forwardRef(
    ({ isInputDisabled, inputValue, handleInput, setLatestKeyDown }, ref) => {
        return (
            <div className={styles.inputWrap}>
                <input
                    className={styles.input}
                    ref={ref}
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
);
export default TypingTestInput;
