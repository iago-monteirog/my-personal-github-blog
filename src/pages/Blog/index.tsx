import { NavLink } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import * as S from './styles';
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import ReactMarkdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';


interface User {
    login: string,
}

interface Issue {
    title: string,
    user: User,
    body: string,
    number: number,
    created_at: string
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

    function truncateText(text: string, maxLength: number) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    function createdAtDateRelativeToNow(dateString: string) {
        const date = new Date(dateString); // Convert string to Date object

        const newDate = formatDistanceToNow(date, {
            locale: ptBR,
            addSuffix: true
        });

        return newDate;
    }

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
                                    <span>{createdAtDateRelativeToNow(issue.created_at)}</span>
                                </S.PostHeader>

                                <ReactMarkdown>
                                    {truncateText(issue.body, 181)}
                                </ReactMarkdown>
                            </S.Post>
                        </NavLink>
                    )
                })}
            </S.BlogContent>
        </S.BlogContainer>
    )
}