import { useState, useEffect, useContext } from "react";
import PlayerType from "../../types/PlayerType.ts";
import PlayerCard from "./PlayerCard.tsx";
import styled from "styled-components";

const Cards = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    max-width: 600px;
`;

export default function PlayerCards({ playersData, query }) {
    useEffect(() => {
        setPlayers(playersData);
    }, []);

    const [players, setPlayers] = useState<PlayerType[]>([]);

    return (
        <Cards>
            {players
                .filter((player) => {
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
