import styles from "./timer.module.css";
import Reset from "../svg/Reset";

type TimerProps = {
    timer: number;
    handleClick: () => void;
};

export default function Timer({ timer, handleClick }: TimerProps) {
    return (
        <div className={styles.timer}>
            <div>
                <h3>
                    Timer: <span className={styles.timerSec}>{timer}</span>
                </h3>
            </div>
            <div>
                <button className={styles.resetBtn} onClick={handleClick}>
                    <Reset size={28} color={"#fff"}></Reset>
                </button>
            </div>
        </div>
    );
}
