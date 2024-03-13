import styles from "./input.module.css";
import { ChangeEvent, forwardRef } from "react";

type TypingTestInputProps = {
    isInputDisabled: boolean;
    inputValue: string;
    handleInput: (e: ChangeEvent) => void;
};

const TypingTestInput = forwardRef<HTMLInputElement, TypingTestInputProps>(
    (
        { isInputDisabled, inputValue, handleInput }: TypingTestInputProps,
        ref
    ) => {
        return (
            <div className={styles.inputWrap}>
                <input
                    className={styles.input}
                    ref={ref}
                    autoFocus
                    disabled={isInputDisabled}
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        handleInput(e);
                    }}
                />
            </div>
        );
    }
);
export default TypingTestInput;
