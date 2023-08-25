import * as S from './styles';
import githubIcon from '../../assets/github.svg';
import buildingIcon from '../../assets/building-solid.svg';
import userGroupIcon from '../../assets/user-group-solid.svg';
import arrowUpIcon from '../../assets/arrow-up-right-from-square-solid.svg';
import { useEffect, useState } from 'react';
import { api } from '../../api/api';

interface Profile {
    login: string,
    name: string,
    company: string,
    followers: number,
    bio: string,
    html_url: string
}

export function Profile() {
    const [profileData, setProfileData] = useState<Profile>();

    async function searchProfileData() {
        const response = await api.get('/users/iago-monteirog');

        setProfileData(response.data);
    }

    useEffect(() => {
        searchProfileData();
    }, [])

    return (
        <S.ProfileContainer>
            <div>
                <S.ProfileImg src="https://github.com/iago-monteirog.png" alt="" />
            </div>
            <S.ProfileContent>
                <S.ProfileTitle>
                    <h3>{profileData?.name}</h3>

                    <S.GithubLink href={profileData?.html_url} target='_blank'>
                        <a>github</a>
                        <S.ProfileIcons variant='xs' src={arrowUpIcon} alt="" />
                    </S.GithubLink>
                </S.ProfileTitle>

                <p>
                    {profileData?.bio}
                </p>

                <S.InfosContainer>
                    <S.InfosContent>
                        <S.ProfileIcons variant='s' src={githubIcon} alt="" />
                        <span>{profileData?.login}</span>
                    </S.InfosContent>
                    <S.InfosContent>
                        <S.ProfileIcons variant='s' src={buildingIcon} alt="" />
                        <span>{profileData?.company}</span>
                    </S.InfosContent>
                    <S.InfosContent>
                        <S.ProfileIcons variant='s' src={userGroupIcon} alt="" />
                        <span>{profileData?.followers} seguidores</span>
                    </S.InfosContent>
                </S.InfosContainer>
            </S.ProfileContent>

        </S.ProfileContainer>
    )
}