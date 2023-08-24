import { NavLink } from 'react-router-dom';
import * as S from './styles';
import arrow from '../../assets/chevron-left-solid.svg'
import squareArrow from '../../assets/arrow-up-right-from-square-solid.svg';
import github from '../../assets/github.svg';
import calendar from '../../assets/calendar-day-solid.svg';
import comment from '../../assets/comment-solid.svg';

export function PostPage() {
    return (
        <S.PostContainer>
            <S.PostInfoContainer>
                <S.PostInfoHeader>
                    <NavLink to="/">
                        <img src={arrow} alt="" />
                        voltar
                    </NavLink>

                    <a href="">
                        ver no github
                        <img src={squareArrow} alt="" />
                    </a>
                </S.PostInfoHeader>

                <p>JavaScript data types and data structures</p>

                <S.InfosContainer>
                    <S.InfosContent>
                        <img src={github} alt="" />
                        <span>iago-monteirog</span>
                    </S.InfosContent>
                    <S.InfosContent>
                        <img src={calendar} alt="" />
                        <span>Há 1 dia</span>
                    </S.InfosContent>
                    <S.InfosContent>
                        <img src={comment} alt="" />
                        <span>5 comentários</span>
                    </S.InfosContent>
                </S.InfosContainer>
            </S.PostInfoContainer>
        </S.PostContainer>
    )
}