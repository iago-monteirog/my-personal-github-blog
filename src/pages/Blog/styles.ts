import styled from "styled-components";

export const BlogContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 4rem;
    padding: 0 4.5rem;
`;

export const BlogContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 48px;
    
    a {
        color: inherit;
        text-decoration: none;
    }
`;

export const Post = styled.div`
    border-radius: 10px;
    background: ${props => props.theme["base-post"]};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 20px;

    cursor: pointer;
`;

export const PostHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.6;
        color: ${props => props.theme["base-title"]};
    }
    
    span {
        font-size: 0.875rem;
        line-height: 1.6;
        color: ${props => props.theme["base-span"]};
    }
`