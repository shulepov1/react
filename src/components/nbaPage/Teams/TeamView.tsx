import { useQuery } from "@tanstack/react-query";
import styles from "./teamView.module.scss";
import { Link } from "react-router-dom";
import { team, player } from "../../../types/Api";

interface props {
  index: number;
  team: team | undefined;
}

export default function TeamView({ index, team }: props) {
  const { isPending, isFetching, error, data, isError, refetch } = useQuery({
    queryKey: [`team${index}`],
    queryFn: async (): Promise<player[]> => {
      const pd = await fetch(
        `https://api.balldontlie.io/v1/players/?team_ids[]=${index}`,
        {
          headers: {
            Authorization: import.meta.env.VITE_API_KEY_NBA,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          return data.data;
        });
      return pd;
    },
    staleTime: 3600000,
  });

  if (isPending || isFetching) {
    return <div className={styles.loading}>LOADING...</div>;
  }
  if ((isError && error) || !team) {
    return (
      <div>
        <div>Error has occured: {error && error.message}</div>
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
  return (
    <div>
      <div className={styles.teamName}>{team.full_name}</div>
      <div className={styles.players}>
        {data.map((player) => {
          return (
            <div className={styles.player}>
              <div>{player.jersey_number}</div>
              <div>
                <Link to={`/player/${player.id}`}>
                  {player.first_name} {player.last_name}
                </Link>
              </div>
              <div>{player.height}</div>
              <div>{player.position}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
