import * as S from './styles';
import githubIcon from '../../assets/github.svg';
import buildingIcon from '../../assets/building-solid.svg';
import userGroupIcon from '../../assets/user-group-solid.svg';
import arrowUpIcon from '../../assets/arrow-up-right-from-square-solid.svg';

export function Profile() {
    return (
        <S.ProfileContainer>
            <div>
                <S.ProfileImg src="https://github.com/iago-monteirog.png" alt="" />
            </div>

            <S.ProfileContent>
                <S.ProfileTitle>
                    <h3>Iago Monteiro Garcia</h3>

                    <S.GithubLink>
                        <a>github</a>
                        <S.ProfileIcons variant='xs' src={arrowUpIcon} alt="" />
                    </S.GithubLink>
                </S.ProfileTitle>

                <p>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </p>

                <S.InfosContainer>
                    <S.InfosContent>
                        <S.ProfileIcons variant='s' src={githubIcon} alt="" />
                        <span>iago-monteirog</span>
                    </S.InfosContent>
                    <S.InfosContent>
                        <S.ProfileIcons variant='s' src={buildingIcon} alt="" />
                        <span>Rocketseat</span>
                    </S.InfosContent>
                    <S.InfosContent>
                        <S.ProfileIcons variant='s' src={userGroupIcon} alt="" />
                        <span>32 seguidores</span>
                    </S.InfosContent>
                </S.InfosContainer>
            </S.ProfileContent>
        </S.ProfileContainer>
    )
}