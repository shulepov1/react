export default function Timer({ timer, handleClick }) {
    return (
        <div>
            <h3>Timer: {timer}</h3>
            <div>
                <button onClick={handleClick}>Reset</button>
            </div>
        </div>
    );
}
