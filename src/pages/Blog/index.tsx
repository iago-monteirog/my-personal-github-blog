import { NavLink } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import * as S from './styles';

export function BlogPage() {
    return (
        <S.BlogContainer>
            <Profile />
            <SearchForm />

            <S.BlogContent>
                <NavLink to="/post">
                    <S.Post>
                        <S.PostHeader>
                            <p>JavaScript data types and data structures</p>
                            <span>Há 1 dia</span>
                        </S.PostHeader>

                        <p>
                            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
                        </p>
                    </S.Post>
                </NavLink>
                <NavLink to="/post">
                    <S.Post>
                        <S.PostHeader>
                            <p>JavaScript data types and data structures</p>
                            <span>Há 1 dia</span>
                        </S.PostHeader>

                        <p>
                            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
                        </p>
                    </S.Post>
                </NavLink>
                <NavLink to="/post">
                    <S.Post>
                        <S.PostHeader>
                            <p>JavaScript data types and data structures</p>
                            <span>Há 1 dia</span>
                        </S.PostHeader>

                        <p>
                            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
                        </p>
                    </S.Post>
                </NavLink>
                <NavLink to="/post">
                    <S.Post>
                        <S.PostHeader>
                            <p>JavaScript data types and data structures</p>
                            <span>Há 1 dia</span>
                        </S.PostHeader>

                        <p>
                            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
                        </p>
                    </S.Post>
                </NavLink>
            </S.BlogContent>
        </S.BlogContainer>
    )
}