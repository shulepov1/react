import styled from "styled-components";

const PositionContainer = styled.button`
    color: ${(props) =>
        props.position === props.chosenPosition ? "red" : "black"};
`;

type PlayerOptionPosition = {
    position: string;
    onClick: (value: string) => void;
};

export default function PlayerOptionPosition({
    position,
    chosenPosition,
    onClick,
}: PlayerOptionPosition) {
    return (
        <PositionContainer
            position={position}
            chosenPosition={chosenPosition}
            onClick={onClick}
        >
            {position}
        </PositionContainer>
    );
}
