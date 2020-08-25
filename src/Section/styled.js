import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: #fff;
    margin: 5px 0;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
    border-bottom: 2px solid #ddd;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr auto;
    align-items: baseline;
    padding: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const Body = styled.div`
    padding: 20px;
`;