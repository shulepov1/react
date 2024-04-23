import { useEffect } from "react";
import styled from "styled-components";

const ModalDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;
const ModalDivContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    position: relative;
`;
const Close = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 24px;
    color: black;
`;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: JSX.Element | JSX.Element[];
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <ModalDiv>
            <ModalDivContent>
                <Close onClick={onClose}>&times;</Close>
                {children}
            </ModalDivContent>
        </ModalDiv>
    );
}
