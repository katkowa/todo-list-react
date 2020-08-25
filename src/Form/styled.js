import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
`;

export const Button = styled.button`
    color: #fff;
    background-color: teal;
    padding: 10px;
    border: 1px solid #ddd;
    transition: 1s;

    &:hover {
    background-color: #009696;
    transform: scale(1.1);
    }

    &:active {
    background-color: #00afaf;
    }
`;