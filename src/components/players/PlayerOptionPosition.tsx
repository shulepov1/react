import { MouseEvent } from "react";
import styled from "styled-components";

interface PositionContainer {
    positionProp: string;
    chosenPosition: string;
    onClick: (event: MouseEvent) => void;
}
const PositionContainer = styled.button<PositionContainer>`
    color: ${(props) =>
        props.positionProp === props.chosenPosition ? "red" : "black"};
`;

interface PlayerOptionPosition {
    position: string;
    chosenPosition: string;
    onClick: (event: MouseEvent) => void;
}

export default function PlayerOptionPosition({
    position,
    chosenPosition,
    onClick,
}: PlayerOptionPosition) {
    return (
        <PositionContainer
            positionProp={position}
            chosenPosition={chosenPosition}
            onClick={onClick}
        >
            {position}
        </PositionContainer>
    );
}
