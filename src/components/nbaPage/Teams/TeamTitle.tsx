import styles from "./teamTitle.module.scss";
import Eye from "../../svg/Eye";
import { Dispatch, SetStateAction } from "react";
import { team } from "../../../types/Api";

interface props {
  setChosenTeamIndex: Dispatch<SetStateAction<number>>;
  chosenTeamIndex: number;
  team: team;
  setIsShowingTeam: Dispatch<SetStateAction<boolean>>;
}

export default function TeamTitle({
  setChosenTeamIndex,
  chosenTeamIndex,
  team,
  setIsShowingTeam,
}: props) {
  return (
    <div
      className={
        team.city === ""
          ? styles.teamTitleContainer__old
          : styles.teamTitleContainer
      }
    >
      <div className={styles.nameRow}>
        <div className={styles.city}>{team.city ? team.city : "unknown"}</div>
        <div className={styles.name}>{team.name}</div>
        <button
          className={styles.buttonEye}
          onClick={() => {
            if (team.id === chosenTeamIndex) {
              setIsShowingTeam(false);
              setChosenTeamIndex(-1);
              return;
            }
            setIsShowingTeam(true);
            setChosenTeamIndex(team.id);
          }}
        >
          <Eye
            size={"18"}
            fill={chosenTeamIndex === team.id ? "white" : "gray"}
          ></Eye>
        </button>
      </div>
      {team.city != "" && (
        <div className={styles.confRow}>
          <div
            className={
              team.conference === "West"
                ? styles.conferenceWest
                : team.conference === "East"
                ? styles.conferenceEast
                : ""
            }
          >
            {team.conference.slice(0, 1)}
          </div>
          <div className={styles.separator}>|</div>
          <div className={styles.division}>{team.division}</div>
        </div>
      )}
    </div>
  );
}
