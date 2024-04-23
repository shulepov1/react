import { FormEvent, useRef } from "react";
import styled from "styled-components";
import PlayerType from "../../types/PlayerType";

interface AddPlayerFormProps {
    players: PlayerType[];
    setPlayers: (players: PlayerType[]) => void;
    onClose: () => void;
}
interface FormElements extends HTMLFormElement {
    playerName: HTMLInputElement; // 'name' property is used in HTMLFormElement
    position: HTMLInputElement;
    number: HTMLInputElement;
}

export default function AddPlayerForm({
    players,
    setPlayers,
    onClose,
}: AddPlayerFormProps) {
    const Modal = styled.div`
        border: 1px solid blue;
        border-radius: 1rem;
        background-color: brown;
        transition: all 1s ease;
        opacity: 1;
        padding: 1rem;
    `;

    const formRef = useRef<HTMLFormElement>(null);
    const addPlayer = (playerData: PlayerType) => {
        setPlayers([...players, playerData]);
    };
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const { playerName, position, number } =
            form.elements as unknown as FormElements;
        if (
            position.value === "PG" ||
            position.value === "SG" ||
            position.value === "SF" ||
            position.value === "PF" ||
            position.value === "C"
        ) {
            addPlayer({
                name: playerName.value,
                position: position.value,
                number: Number(number.value),
            });
        }

        onClose();
    };

    return (
        <Modal>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        placeholder="Lebron James"
                        id="fullName"
                        name="name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="number">Number</label>
                    <input
                        type="number"
                        min={0}
                        max={99}
                        placeholder="12"
                        id="number"
                        name="number"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="position">Position</label>
                    <select name="position" id="position">
                        <option value="PG">PG</option>
                        <option value="SG">SG</option>
                        <option value="SF">SF</option>
                        <option value="PF">PF</option>
                        <option value="C">C</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Add Player" />
                </div>
            </form>
        </Modal>
    );
}
