import * as S from './styles';

export function SearchForm() {
    return (
        <S.SearchFormContainer>
            <S.TitleHeader>
                <h3>Publicações</h3>
                <span>6 publicações</span>
            </S.TitleHeader>

            <S.StyledInput type="text" placeholder='Buscar conteúdo' />
        </S.SearchFormContainer>
    )
}