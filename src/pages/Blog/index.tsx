import { NavLink } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import * as S from './styles';
import ReactMarkdown from "react-markdown";
import { useContextSelector } from "use-context-selector";
import { IssuesContext } from "../../contexts/IssuesContext";
import { createdAtDateRelativeToNow } from "../../utils/dateFormatter";

export function BlogPage() {
    const issuesData = useContextSelector(IssuesContext, (context) => {
        return context.issuesData;
    });

    function truncateText(text: string, maxLength: number) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    return (
        <S.BlogContainer>
            <Profile />
            <SearchForm />

            <S.BlogContent>
                {issuesData.map((issue) => {
                    return (
                        <NavLink to={`/post/${issue.number}`} key={issue.number}>
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