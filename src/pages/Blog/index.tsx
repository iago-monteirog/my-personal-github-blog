import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import * as S from './styles';

export function BlogPage() {
    return (
        <S.BlogContainer>
            <Profile />
            <SearchForm />
        </S.BlogContainer>
    )
}