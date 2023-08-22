import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["base-profile"]};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0;
`;

export const Logo = styled.img`
 margin-top: -4rem;
`;