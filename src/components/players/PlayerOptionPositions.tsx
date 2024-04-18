import styled from "styled-components";
import PlayerOptionPosition from "./PlayerOptionPosition";

type Props = {
    onClick: (value: string) => void;
    chosenPosition: string;
    position: string;
};

const Positions = styled.div`
    display: flex;
    gap: 1rem;
`;

export default function PlayerOptionPositions({
    onClick,
    chosenPosition,
}: Props) {
    return (
        <Positions>
            <PlayerOptionPosition
                position={"PG"}
                onClick={onClick}
                chosenPosition={chosenPosition}
            ></PlayerOptionPosition>
            <PlayerOptionPosition
                position={"SG"}
                onClick={onClick}
                chosenPosition={chosenPosition}
            ></PlayerOptionPosition>
            <PlayerOptionPosition
                position={"SF"}
                onClick={onClick}
                chosenPosition={chosenPosition}
            ></PlayerOptionPosition>
            <PlayerOptionPosition
                position={"PF"}
                onClick={onClick}
                chosenPosition={chosenPosition}
            ></PlayerOptionPosition>
            <PlayerOptionPosition
                position={"C"}
                onClick={onClick}
                chosenPosition={chosenPosition}
            ></PlayerOptionPosition>
        </Positions>
    );
}
