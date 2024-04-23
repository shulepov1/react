import { AppContext } from "../../App";
import {
    useState,
    useEffect,
    useContext,
    ChangeEvent,
    MouseEvent,
} from "react";
import playersData from "./playersData.ts";
import PlayerCards from "../../components/players/PlayerCards.tsx";
import styled from "styled-components";
import PlayerOptionPositions from "../../components/players/PlayerOptionPositions.tsx";
import AddPlayerForm from "../../components/players/AddPlayerForm.tsx";
import Modal from "../../components/modal/Modal.tsx";
import usePlayerData from "../../hooks/usePlayersData.tsx";

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
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const [players, setPlayers] = usePlayerData();

    function handlePositionButtonClick(event: MouseEvent) {
        const input = event.target as HTMLButtonElement;
        const newPosition = input.textContent;
        if (newPosition === null) {
            return;
        }
        if (newPosition === chosenPosition) {
            setChosenPosition("");
        } else {
            setChosenPosition(newPosition);
        }
    }

    useEffect(() => {
        setActiveIndex(2);
    }, [setActiveIndex]);
    return (
        <Page>
            <button onClick={openModal}>Add Player</button>
            <button
                onClick={() => {
                    setPlayers(playersData);
                }}
            >
                Reset Players
            </button>

            <Modal isOpen={modalOpen} onClose={closeModal}>
                <AddPlayerForm
                    players={players}
                    setPlayers={setPlayers}
                    onClose={closeModal}
                ></AddPlayerForm>
            </Modal>
            <InputContainer>
                <input
                    type="text"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const input = event.target;
                        setQuery(input.value);
                    }}
                />
                <div>you searched: {query}</div>
            </InputContainer>
            <PlayerOptionPositions
                onClick={handlePositionButtonClick}
                chosenPosition={chosenPosition}
            ></PlayerOptionPositions>
            {chosenPosition}
            <PlayerCards
                players={players}
                query={query}
                chosenPosition={chosenPosition}
            />
        </Page>
    );
}
