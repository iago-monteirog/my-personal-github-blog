import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 12.25rem;
`

export const TitleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.6;
    }

    span {
        color: ${props => props.theme["base-span"]};
        font-size: 0.875rem;
        text-align: right;
        line-height: 1.6;
    }
`;

export const StyledInput = styled.input`
    padding: 12px 16px;
    flex: 1;

    border-radius: 6px;
    border: 1px solid ${props => props.theme["base-border"]};
    background: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-text"]};

    &::placeholder {
        color: ${props => props.theme["base-label"]};
    }
`;