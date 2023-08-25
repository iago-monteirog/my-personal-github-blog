import { NavLink } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import * as S from './styles';
import { useEffect, useState } from "react";
import { api } from "../../api/api";

interface User {
    login: string,
}

interface Issue {
    title: string,
    user: User,
    body: string,
    number: number
}

export function BlogPage() {
    const [issuesData, setIssuesData] = useState<Issue[]>([]);

    async function loadIssuesList() {
        const response = await api.get('/search/issues?q=repo:iago-monteirog/my-personal-github-blog');

        setIssuesData(response.data.items);
    }

    useEffect(() => {
        loadIssuesList();
    }, []);

    return (
        <S.BlogContainer>
            <Profile />
            <SearchForm />

            <S.BlogContent>
                {issuesData.map((issue) => {
                    return (
                        <NavLink to="/post" key={issue.number}>
                            <S.Post>
                                <S.PostHeader>
                                    <p>{issue.title}</p>
                                    <span>Há 1 dia</span>
                                </S.PostHeader>

                                <p>
                                    Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
                                </p>
                            </S.Post>
                        </NavLink>
                    )
                })}
            </S.BlogContent>
        </S.BlogContainer>
    )
}