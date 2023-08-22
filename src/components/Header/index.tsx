import * as S from './styles';
import logo from '../../assets/logo.svg';
import effect1 from '../../assets/headerEffect1.svg'
import effect2 from '../../assets/headerEffect2.svg'


export function Header() {
    return (
        <S.HeaderContainer>
            <img src={effect1} alt="" />
            <S.Logo src={logo} alt="" />
            <img src={effect2} alt="" />
        </S.HeaderContainer>
    )
}