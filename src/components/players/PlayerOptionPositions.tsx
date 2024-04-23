import styled from "styled-components";
import PlayerOptionPosition from "./PlayerOptionPosition";
import { MouseEvent } from "react";

type Props = {
    onClick: (event: MouseEvent) => void;
    chosenPosition: string;
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
            {["PG", "SG", "SF", "PF", "C"].map((position) => {
                return (
                    <PlayerOptionPosition
                        position={position}
                        chosenPosition={chosenPosition}
                        onClick={onClick}
                    ></PlayerOptionPosition>
                );
            })}
        </Positions>
    );
}
