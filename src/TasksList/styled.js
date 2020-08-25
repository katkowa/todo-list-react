import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 0;
    border: 1px solid #ddd;
    transition: 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: green;
        color: #fff;

        &:hover {
            background-color: #00a100;
        }

        &:active {
            background-color: #03b803;
        }
    `}

    ${({ remove }) => remove && css`
        background-color: crimson;
        color: #fff;
        text-align: center;
        line-height: 22px;

        &:hover {
            background-color: hsl(348, 83%, 60%);
        }

        &:active {
            background-color: #df667e;
        }
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;