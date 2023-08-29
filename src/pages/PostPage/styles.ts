import styled from "styled-components";

export const PostContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 4rem;
    padding: 0 4.5rem;
`;

export const PostInfoContainer = styled.div`
    background: ${props => props.theme["base-profile"]};
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 4rem;

    display: flex;
    flex: 1;
    flex-direction: column;
    width: 65%;

    p {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.3;
        color: ${props => props.theme["base-title"]};
        margin-top: 20px;
    }
`;

export const PostInfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1.6;
        text-transform: uppercase;
        text-decoration: none;
        color: ${props => props.theme.blue};
    }
`;

export const InfosContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: flex-start;

    margin-top: 1.5rem;
`;

export const InfosContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

export const PostContent = styled.div`
    margin: 150px 35px;
`