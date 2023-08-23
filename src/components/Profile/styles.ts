import styled from "styled-components";

export const ProfileContainer = styled.div`
    background: ${props => props.theme["base-profile"]};
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 4rem;

    display: flex;
    gap: 2rem;
`;

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;

    p {
        color: ${props => props.theme["base-text"]};
        line-height: 1.6;

        min-width: 612px; 
        word-wrap: break-word;
    }
`;

interface IconProps {
    variant: 'xs' | 's',
}

export const ProfileIcons = styled.img<IconProps>`
    width: ${props => props.variant === 'xs' ? '12px' : '18px'};
    height: ${props => props.variant === 'xs' ? '12px' : '18px'};
`;

export const ProfileImg = styled.img`
    border-radius: 8px;
    width: 9.25rem;
    height: 9.25rem;
`;

export const ProfileTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.3;
    }

    a {
        color: ${props => props.theme.blue};
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1.6;
        text-transform: uppercase;
    }
`;

export const GithubLink = styled.div`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
`