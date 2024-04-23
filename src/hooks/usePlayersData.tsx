import { useState } from "react";
import playersData from "../pages/BasketballPlayers/playersData";
import PlayerType from "../types/PlayerType";

// can either be an array or a function that takes in an array
type SetPlayersProps = PlayerType[] | ((data: PlayerType[]) => PlayerType[]);

const usePlayerData = (): [PlayerType[], (data: SetPlayersProps) => void] => {
    const [playerData, setPlayerData] = useState((): PlayerType[] => {
        try {
            const localStoragePlayers = localStorage.getItem("playerData");
            return localStoragePlayers
                ? JSON.parse(localStoragePlayers)
                : playersData;
        } catch (error) {
            console.error(error);
            return playerData;
        }
    });
    const setPlayers = (value: SetPlayersProps) => {
        try {
            const newPlayers =
                value instanceof Function ? value(playerData) : value;
            setPlayerData(newPlayers);
            localStorage.setItem("playerData", JSON.stringify(newPlayers));
        } catch (error) {
            console.error(error);
        }
    };

    return [playerData, setPlayers];
};

export default usePlayerData;
