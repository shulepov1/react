import PlayerType from "../../types/PlayerType";
import styled from "styled-components";

interface Card {
    position: PlayerType["position"];
}
const Card = styled.div<Card>`
    padding: 1rem;
    border: 2px solid white;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    width: 115px;
    height: 100px;
    ${(props) => {
        switch (props.position) {
            case "PG":
                return "background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);";
            case "SG":
                return "background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);";
            case "SF":
                return "background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);";
            case "PF":
                return "background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);";
            case "C":
                return "background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);";
        }
    }};
`;

export default function PlayerCard({ name, position, number }: PlayerType) {
    return (
        <Card position={position}>
            <div>
                <strong>{name}</strong>
            </div>
            <div>{position}</div>
            <div>{number}</div>
        </Card>
    );
}
