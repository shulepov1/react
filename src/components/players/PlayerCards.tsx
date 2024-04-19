import { useState, useEffect, useContext } from "react";
import PlayerType from "../../types/PlayerType.ts";
import PlayerCard from "./PlayerCard.tsx";
import styled from "styled-components";
import usePlayerData from "../../hooks/usePlayersData.tsx";

const Cards = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    max-width: 600px;
`;

export default function PlayerCards({
    players,
    setPlayers,
    playersData,
    query,
    chosenPosition,
}) {
    return (
        <Cards>
            {players
                .filter((player) => {
                    const res =
                        player.name
                            .toLowerCase()
                            .includes(query.toLowerCase()) ||
                        player.number.toString().includes(query);
                    if (chosenPosition) {
                        return res && player.position == chosenPosition;
                    }
                    return (
                        player.name
                            .toLowerCase()
                            .includes(query.toLowerCase()) ||
                        player.number.toString().includes(query) ||
                        player.position
                            .toLowerCase()
                            .includes(query.toLowerCase())
                    );
                })
                .map((player, index) => {
                    return (
                        <PlayerCard
                            key={index}
                            name={player.name}
                            position={player.position}
                            number={player.number}
                        />
                    );
                })}
        </Cards>
    );
}
