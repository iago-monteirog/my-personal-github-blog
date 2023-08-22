import * as S from './styles';
import githubIcon from '../../assets/github.svg';
import buildingIcon from '../../assets/building-solid.svg';
import userGroupIcon from '../../assets/user-group-solid.svg';
import arrowUpIcon from '../../assets/arrow-up-right-from-square-solid.svg';

export function Profile() {
    return (
        <S.ProfileContainer>
            <div>
                <img src="https://github.com/iago-monteirog.png" alt="" />
            </div>

            <div>
                <div>
                    <h3>Iago Monteiro Garcia</h3>

                    <div>
                        <a>GITHUB</a>
                        <img src={arrowUpIcon} alt="" />
                    </div>
                </div>

                <p></p>
                <div>
                    <div>
                        <img src={githubIcon} alt="" />
                        <a href="">iago-monteirog</a>
                    </div>
                    <div>
                        <img src={buildingIcon} alt="" />
                        <a href="">Rocketseat</a>
                    </div>
                    <div>
                        <img src={userGroupIcon} alt="" />
                        <a href="">32 seguidores</a>
                    </div>
                </div>
            </div>
        </S.ProfileContainer>
    )
}