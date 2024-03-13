export default function Results({ words }) {
    return (
        <div>
            <h1>results</h1>
            <div>
                <span>WPM: </span>
                <span>
                    {words.reduce((value, word) => {
                        if (word.ok) {
                            return value + 1;
                        }
                        return value;
                    }, 0)}
                </span>
            </div>
            <div>
                <p>correct words:</p>
                {words.filter((word) => word.ok).map((word) => word.text)}
            </div>
            <div>
                <p>skipped words:</p>
                {words.filter((word) => word.skipped).map((word) => word.text)}
            </div>
            <div>
                <p>words where you made a mistake:</p>
                {words.filter((word) => word.mistaken).map((word) => word.text)}
            </div>
        </div>
    );
}
