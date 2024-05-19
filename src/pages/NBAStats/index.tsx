import { useEffect, useContext } from "react";
import { AppContext } from "../../App";

export default function NBAStatsPage() {
  const { setActiveIndex } = useContext(AppContext);

  useEffect(() => {
    setActiveIndex(4);
  }, [setActiveIndex]);
  return <div>nba stats page</div>;
}
