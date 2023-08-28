import { NavLink } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import * as S from './styles';
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { useContextSelector } from "use-context-selector";
import { IssuesContext } from "../../contexts/IssuesContext";

export function BlogPage() {
    const issuesData = useContextSelector(IssuesContext, (context) => {
        return context.issuesData
    });

    const fetchIssues = useContextSelector(IssuesContext, (context) => {
        return context.fetchIssues
    });

    async function loadIssuesList() {
        await fetchIssues();
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
        const date = new Date(dateString);

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