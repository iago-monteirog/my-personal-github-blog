import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../api/api";

interface IssuesContextType {
    issuesData: Issue[],
    fetchIssues: () => Promise<void>,
    searchForIssue: (query: string) => Promise<void>
}

interface IssuesProviderProps {
    children: ReactNode;
}

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

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesProvider({ children }: IssuesProviderProps) {
    const [issuesData, setIssuesData] = useState<Issue[]>([]);

    const fetchIssues = useCallback(
        async () => {
            const response = await api.
                get('/search/issues?q=repo:iago-monteirog/my-personal-github-blog');

            setIssuesData(response.data.items);
        },
        []);

    const searchForIssue = useCallback(
        async (query: string) => {
            const encodedQuery = encodeURIComponent(query.replace(/ /g, '%'));

            const response = await api.
                get(`/search/issues?q=${encodedQuery}%20repo:iago-monteirog/my-personal-github-blog`);

            setIssuesData(response.data.items);
        },
        []);


    useEffect(() => {
        fetchIssues()
    }, [fetchIssues]);

    return (
        <IssuesContext.Provider
            value={{
                issuesData,
                fetchIssues,
                searchForIssue
            }}
        >
            {children}
        </IssuesContext.Provider>
    )
}