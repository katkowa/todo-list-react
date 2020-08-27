import styled from "styled-components";

export const ButtonsContainer = styled.div`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

export const Button = styled.button`
    border: 0;
    background-color: inherit;
    color: ${({ theme }) => theme.color.teal};
    transition: 0.5s;

    &:disabled {
        color: ${({ theme }) => theme.color.alto};
    }

    &:hover:enabled {
        filter: brightness(110%);
    }

    &:active:enabled {
        filter: brightness(120%);
    }

    &:focus {
    outline: 0;
    }
`;