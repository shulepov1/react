import styles from "./teamTitle.module.scss";
import Eye from "../../svg/Eye";

export default function TeamTitle({
  setChosenTeamIndex,
  chosenTeamIndex,
  isShowingTeam,
  team,
  setIsShowingTeam,
}) {
  return (
    <div className={styles.teamTitleContainer}>
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
          <div className={styles.conference}>{team.conference.slice(0, 1)}</div>
          <div className={styles.separator}>|</div>
          <div className={styles.division}>{team.division}</div>
        </div>
      )}
    </div>
  );
}
