import { ChangeEvent } from 'react';
import { useContextSelector } from 'use-context-selector';
import * as S from './styles';
import { IssuesContext } from '../../contexts/IssuesContext';

export function SearchForm() {
    const issuesData = useContextSelector(IssuesContext, (context) => {
        return context.issuesData;
    });

    const searchForIssue = useContextSelector(IssuesContext, (context) => {
        return context.searchForIssue;
    })

    async function handleSearchForIssue(event: ChangeEvent<HTMLInputElement>) {
        await searchForIssue(event.target.value);
    }

    return (
        <S.SearchFormContainer>
            <S.TitleHeader>
                <h3>Publicações</h3>
                <span>{issuesData.length} publicações</span>
            </S.TitleHeader>

            <S.StyledInput type="text" placeholder='Buscar conteúdo' onChange={handleSearchForIssue} />
        </S.SearchFormContainer>
    )
}