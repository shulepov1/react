import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import { useQuery } from "@tanstack/react-query";
import Teams from "../../components/nbaPage/Teams/Teams";
import styles from "./index.module.scss";

export default function NBAStatsPage() {
  const { setActiveIndex } = useContext(AppContext);

  useEffect(() => {
    setActiveIndex(4);
  }, [setActiveIndex]);

  useEffect(() => {
    if (data) {
      setTeams(data);
      setOriginalTeams(data);
    }
  }, []);

  const [teams, setTeams] = useState([]);
  const [originalTeams, setOriginalTeams] = useState([]);

  const { isPending, isError, isFetching, data, error, refetch } = useQuery({
    queryKey: ["standings"],
    queryFn: async () => {
      const t = await fetch("https://api.balldontlie.io/v1/teams", {
        headers: {
          Authorization: import.meta.env.VITE_API_KEY_NBA,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setTeams(data.data);
          setOriginalTeams(data.data);
          console.log("data teams", data.data);
          return data.data;
        })
        .catch((e) => {
          console.log(e);
        });
      return t;
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
  if (isError && error) {
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

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Teams
          originalTeams={originalTeams}
          teams={teams}
          setTeams={setTeams}
        ></Teams>
      </div>
    </main>
  );
}
