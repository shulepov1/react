import { AppContext } from "../../App";
import { useState, useEffect, useContext } from "react";
import playersData from "./playersData.ts";
import PlayerCards from "../../components/players/PlayerCards.tsx";
import styled from "styled-components";
import PlayerOptionPositions from "../../components/players/PlayerOptionPositions.tsx";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200px;
`;

export default function BasketballPlayersPage() {
    const { setActiveIndex } = useContext(AppContext);

    const [query, setQuery] = useState("");
    const [chosenPosition, setChosenPosition] = useState("");

    function handlePositionButtonClick(e) {
        const newPos = e.target.textContent;
        if (newPos === chosenPosition) {
            setChosenPosition("");
        } else {
            setChosenPosition(newPos);
        }
    }
    useEffect(() => {
        setActiveIndex(2);
    }, [setActiveIndex]);
    return (
        <Page>
            <InputContainer>
                <input type="text" onInput={(e) => setQuery(e.target.value)} />
                <div>you searched: {query}</div>
            </InputContainer>
            <PlayerOptionPositions
                onClick={handlePositionButtonClick}
                chosenPosition={chosenPosition}
            ></PlayerOptionPositions>
            {chosenPosition}
            <PlayerCards
                playersData={playersData}
                query={query}
                chosenPosition={chosenPosition}
            />
        </Page>
    );
}
