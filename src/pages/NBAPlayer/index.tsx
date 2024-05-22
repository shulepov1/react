import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useQuery } from "@tanstack/react-query";
import styles from "./index.module.scss";

export default function NBAPlayerPage() {
  const { setActiveIndex } = useContext(AppContext);
  const params = useParams();

  const [stats, setStats] = useState([]);
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [setActiveIndex]);

  useEffect(() => {
    if (data) {
      console.log("already data", data);
      setStats(data[0]);
      setPlayer(data[1]);
    }
  }, []);

  const { isPending, isError, isFetching, data, error, refetch } = useQuery({
    queryKey: [`player${params.id}`],
    queryFn: async () => {
      const [stts, plyr] = await Promise.all([
        fetch(
          `https://api.balldontlie.io/v1/stats?seasons[]=2023&player_ids[]=${params.id}&postseason=false`,
          {
            headers: {
              Authorization: import.meta.env.VITE_API_KEY_NBA,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => data),
        fetch(
          `https://api.balldontlie.io/v1/players?player_ids[]=${params.id}`,
          {
            headers: {
              Authorization: import.meta.env.VITE_API_KEY_NBA,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => data),
      ]);
      setStats(stts.data);
      setPlayer(plyr.data[0]);
      console.log(stts.data, plyr.data);
      return [stts.data, plyr.data[0]];
    },
    staleTime: 3600000,
  });
  if (isPending || isFetching) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>LOADING...</div>
      </main>
    );
  }
  if ((isError && error) || data.length === 0) {
    return (
      <div>
        <div>Error has occured: {error.message}</div>
        <button
          onClick={() => {
            refetch();
          }}
        >
          try again...
        </button>
      </div>
    );
  }
  console.log("rendering stats", stats);
  return (
    <div className={styles.page}>
      <div className={styles.playerInfo}>
        <div className={styles.playerName}>
          {player.first_name} {player.last_name}
        </div>
        <div className={styles.playerFrom}>
          {player.college}, {player.country}
        </div>
        <div>
          <span className={styles.playerLabel}>draft year:</span>{" "}
          {player.draft_year || "undrafted"}
        </div>
        <div>
          <span className={styles.playerLabel}>draft number:</span>{" "}
          {player.draft_number || "undrafted"}
        </div>
        <div>
          <span className={styles.playerLabel}>height:</span> {player.height}
        </div>
        <div>
          <span className={styles.playerLabel}>weight:</span> {player.weight}{" "}
          lbs
        </div>
        <div>
          <span className={styles.playerLabel}>jersey number:</span>{" "}
          {player.jersey_number}
        </div>
        <div>
          <span className={styles.playerLabel}>position:</span>{" "}
          {player.position}
        </div>
      </div>
      <div className={styles.tableContainer}>
        <h2 className={styles.tableHeading}>Games</h2>

        <table id={styles.statsTable}>
          <caption>last 25 games of 2023/2024 season</caption>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Min</th>
              <th scope="col">PTS</th>
              <th scope="col">AST</th>
              <th scope="col">REB</th>
              <th scope="col">BLK</th>
              <th scope="col">STL</th>
              <th scope="col">OREB</th>
              <th scope="col">DREB</th>
              <th scope="col">3pt %</th>
              <th scope="col">3pt made</th>
              <th scope="col">3pt tried</th>
              <th scope="col">fg %</th>
              <th scope="col">fg made</th>
              <th scope="col">fg tried</th>
              <th scope="col">ft %</th>
              <th scope="col">ft made</th>
              <th scope="col">ft tried</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat) => {
              return (
                <tr>
                  <td scope="row">{stat.game.date}</td>
                  <td>{stat.min}</td>
                  <td>{stat.pts}</td>
                  <td>{stat.ast}</td>
                  <td>{stat.reb}</td>
                  <td>{stat.blk}</td>
                  <td>{stat.stl}</td>
                  <td>{stat.oreb}</td>
                  <td>{stat.dreb}</td>
                  <td>{stat.fg3_pct.toFixed(2)}</td>
                  <td>{stat.fg3m}</td>
                  <td>{stat.fg3a}</td>
                  <td>{stat.fg_pct.toFixed(2)}</td>
                  <td>{stat.fgm}</td>
                  <td>{stat.fga}</td>
                  <td>{stat.ft_pct.toFixed(2)}</td>
                  <td>{stat.ftm}</td>
                  <td>{stat.fta}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {stats.length === 0 && (
          <div>
            Apparently, {player.first_name} hasn't played any games recently =(
          </div>
        )}
      </div>
    </div>
  );
}
