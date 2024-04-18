import { AppContext } from "../../App";
import { useState, useEffect, useContext } from "react";
import playersData from "./playersData.ts";
import PlayerCards from "../../components/players/PlayerCards.tsx";
import styled from "styled-components";

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

    useEffect(() => {
        setActiveIndex(2);
    }, [setActiveIndex]);

    return (
        <Page>
            <InputContainer>
                <input type="text" onInput={(e) => setQuery(e.target.value)} />
                <div>you searched: {query}</div>
            </InputContainer>

            <PlayerCards playersData={playersData} query={query} />
        </Page>
    );
}
