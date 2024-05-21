import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useQuery } from "@tanstack/react-query";
import styles from "./index.module.scss";

export default function NBAPlayerPage() {
  const { setActiveIndex } = useContext(AppContext);
  const params = useParams();

  const [stats, setStats] = useState([]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [setActiveIndex]);

  //   useEffect(() => {
  //     if (data) {
  //       setStats(data);
  //     }
  //   }, []);

  const { isPending, isError, isFetching, data, error, refetch } = useQuery({
    queryKey: [`player${params.id}`],
    queryFn: async () => {
      const p = await fetch(
        `https://api.balldontlie.io/v1/stats?seasons[]=2024&player_ids[]=${params.id}&postseason=false`,
        {
          headers: {
            Authorization: import.meta.env.VITE_API_KEY_NBA,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("_data", data);
          setStats(data.data);
          return data.data;
        })
        .catch((e) => {
          console.log(e);
        });
      return p;
    },
    staleTime: 0,
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
  console.log("DATA", data);
  return (
    <div>
      <div></div>
    </div>
  );
}
