import TeamTitle from "./TeamTitle";
import Dropdown from "../../dropdown/Dropdown";
import DropdownOption from "../../dropdown/DropdownOption";
import { useState } from "react";
import TeamView from "./TeamView";
import styles from "./teams.module.scss";

export default function Teams({ originalTeams, teams, setTeams }) {
  function sortAlphabetically() {
    const newTeams = [...teams];
    newTeams.sort((teamA, teamB) => {
      return teamA.name.localeCompare(teamB.name);
    });
    setTeams(newTeams);
  }
  function sortByConference() {
    const newTeams = [...teams];
    newTeams.sort((teamA, teamB) => {
      return teamA.conference.localeCompare(teamB.conference);
    });
    setTeams(newTeams);
  }
  const [activeIndex, setActiveIndex] = useState(1);
  const [isShowOldTeamsChecked, setIsShowOldTeamsChecked] = useState(true);

  const [isShowingTeam, setIsShowingTeam] = useState(false);
  const [chosenTeamIndex, setChosenTeamIndex] = useState(-1);

  return (
    <div>
      <h1 className={styles.title}>Stats 23/24</h1>
      <div className={styles.options}>
        <Dropdown>
          <DropdownOption
            text={"Alphabetically"}
            onClick={() => {
              setActiveIndex(1);
              sortAlphabetically();
            }}
            isActive={activeIndex === 1 ? true : false}
          ></DropdownOption>
          <DropdownOption
            text={"By Conference"}
            onClick={() => {
              setActiveIndex(2);
              sortByConference();
            }}
            isActive={activeIndex === 2 ? true : false}
          ></DropdownOption>
        </Dropdown>
        <div>
          <input
            type="checkbox"
            id="showOldTeams"
            onChange={(e) => {
              const newChecked = !isShowOldTeamsChecked;
              setIsShowOldTeamsChecked(newChecked);
              if (newChecked) {
                setTeams(originalTeams);
              } else {
                const filteredTeams = teams.filter((team) => team.city);
                setTeams(filteredTeams);
              }
            }}
            checked={isShowOldTeamsChecked}
          />
          <label htmlFor="showOldTeams">Show old teams</label>
        </div>
      </div>
      <div className={styles.mainCont}>
        <div className={styles.teamsCont}>
          {teams.map((team) => {
            return (
              <TeamTitle
                chosenTeamIndex={chosenTeamIndex}
                setChosenTeamIndex={setChosenTeamIndex}
                isShowingTeam={isShowingTeam}
                setIsShowingTeam={setIsShowingTeam}
                team={team}
              />
            );
          })}
        </div>
        <div>
          {isShowingTeam &&
            teams.find((team) => team.id === chosenTeamIndex) && (
              <TeamView
                index={chosenTeamIndex}
                team={teams.find((team) => team.id === chosenTeamIndex)}
              />
            )}
        </div>
      </div>
    </div>
  );
}
