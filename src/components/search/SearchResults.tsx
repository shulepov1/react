import { useState, useEffect, memo } from "react";
import styles from "./searchResults.module.scss";
import { Link } from "react-router-dom";

const MemoedSearchResults = memo(function SearchResults({ query, setQuery }) {
  console.log("rendering with query:", query);
  const [timer, setTimer] = useState(null);
  const [results, setResults] = useState([]);
  const [isDebouncing, setIsDebouncing] = useState(false);

  async function searchPlayers() {
    console.log("query is", query);
    const response = await fetch(
      `https://api.balldontlie.io/v1/players?search=${query}`,
      {
        headers: {
          Authorization: import.meta.env.VITE_API_KEY_NBA,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("fetched players", data);
        setResults(data.data);
        return data;
      });
    console.log("response", response);
    if (!response.data) {
      throw new Error("Network response was not ok");
    }
    return response;
  }

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    if (query !== "") {
      setIsDebouncing(true);
      setTimer(
        setTimeout(async () => {
          await searchPlayers();
          setIsDebouncing(false);
        }, 500)
      );
    } else {
      setIsDebouncing(false);
    }
  }, [query]);

  return (
    <div className={styles.resultsContainer}>
      {isDebouncing ? (
        <span className={styles.loader}></span>
      ) : (
        <div className={styles.results}>
          {results.length === 0 ? (
            <div>no players were found.</div>
          ) : (
            results.map((player) => {
              return (
                <button
                  //   onClick={() => {
                  //     setQuery("");
                  //   }}
                  className={styles.playerLinkContainer}
                >
                  <Link
                    to={`/player/${player.id}`}
                    className={styles.playerLink}
                  >
                    {player.first_name} {player.last_name}
                  </Link>
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
});

export default MemoedSearchResults;
