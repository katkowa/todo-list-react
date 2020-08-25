import styled from "styled-components";

export const ButtonsContainer = styled.div`
    @media(max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

export const Button = styled.button`
    border: 0;
    background-color: inherit;
    color: teal;
    transition: 0.5s;

    &:disabled {
        color: #ddd;
    }

    &:hover:enabled {
    color: hsl(180, 100%, 35%);
    }

    &:active:enabled {
    color: hsl(180, 100%, 45%);
    }

    &:focus {
    outline: 0;
    }
`;