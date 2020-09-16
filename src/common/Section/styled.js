import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    margin: 5px 0;
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const Header = styled.header`
    border-bottom: 2px solid ${({ theme }) => theme.color.alto};
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr auto;
    align-items: baseline;
    padding: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
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