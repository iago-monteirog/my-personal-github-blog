import { NavLink, useParams } from 'react-router-dom';
import * as S from './styles';
import arrow from '../../assets/chevron-left-solid.svg'
import squareArrow from '../../assets/arrow-up-right-from-square-solid.svg';
import github from '../../assets/github.svg';
import calendar from '../../assets/calendar-day-solid.svg';
import comment from '../../assets/comment-solid.svg';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { createdAtDateRelativeToNow } from '../../utils/dateFormatter';

interface PostProps {
    title: string,
    user: {
        login: string
    },
    html_url: string,
    comments: number,
    created_at: string,
    body: string,
    number: number
}

export function PostPage() {
    const params = useParams();
    const [post, setPost] = useState<PostProps[]>([]);

    async function loadFullPost(number: string) {
        const response = await api
            .get(`/repos/iago-monteirog/my-personal-github-blog/issues/${number}`);

        setPost([response.data]);
    }

    useEffect(() => {
        if (params.id) {
            loadFullPost(params.id)
        }
    }, [params]);

    return (
        <>
            {post.map((element) => {
                return (
                    <S.PostContainer key={element.number}>
                        <S.PostInfoContainer>
                            <S.PostInfoHeader>
                                <NavLink to="/">
                                    <img src={arrow} alt="" />
                                    voltar
                                </NavLink>

                                <a href={element.html_url} target='_blank'>
                                    ver no github
                                    <img src={squareArrow} alt="" />
                                </a>
                            </S.PostInfoHeader>

                            <p>{element.title}</p>

                            <S.InfosContainer>
                                <S.InfosContent>
                                    <img src={github} alt="" />
                                    <span>{element.user.login}</span>
                                </S.InfosContent>
                                <S.InfosContent>
                                    <img src={calendar} alt="" />
                                    <span>
                                        {createdAtDateRelativeToNow(element.created_at)}
                                    </span>
                                </S.InfosContent>
                                <S.InfosContent>
                                    <img src={comment} alt="" />
                                    <span>{element.comments} comentários</span>
                                </S.InfosContent>
                            </S.InfosContainer>
                        </S.PostInfoContainer>

                        <S.PostContent>
                            <ReactMarkdown>
                                {element.body}
                            </ReactMarkdown>
                        </S.PostContent>
                    </S.PostContainer>
                )
            })}

        </>
    )
}