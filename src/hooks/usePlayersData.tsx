import { useState } from "react";
import playersData from "../pages/BasketballPlayers/playersData";

const usePlayerData = () => {
    const [playerData, setPlayerData] = useState(() => {
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

    const setPlayers = (value) => {
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
