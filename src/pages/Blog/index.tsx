import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import * as S from './styles';

export function BlogPage() {
    return (
        <S.BlogContainer>
            <Profile />
            <SearchForm />

            <S.BlogContent>
                <S.Post>
                    <S.PostHeader>
                        <p>JavaScript data types and data structures</p>
                        <span>Há 1 dia</span>
                    </S.PostHeader>

                    <p>
                        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
                    </p>
                </S.Post>
                <S.Post>
                    <S.PostHeader>
                        <p>JavaScript data types and data structures</p>
                        <span>Há 1 dia</span>
                    </S.PostHeader>

                    <p>
                        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
                    </p>
                </S.Post>
                <S.Post>
                    <S.PostHeader>
                        <p>JavaScript data types and data structures</p>
                        <span>Há 1 dia</span>
                    </S.PostHeader>

                    <p>
                        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
                    </p>
                </S.Post>
                <S.Post>
                    <S.PostHeader>
                        <p>JavaScript data types and data structures</p>
                        <span>Há 1 dia</span>
                    </S.PostHeader>

                    <p>
                        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
                    </p>
                </S.Post>
            </S.BlogContent>
        </S.BlogContainer>
    )
}