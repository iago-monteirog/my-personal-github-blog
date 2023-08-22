import { Outlet } from 'react-router-dom';
import * as S from './styles';

export function DefaultLayout() {
    return (
        <S.LayoutContainer>
            <h1>ola mundo</h1>
            <Outlet />
        </S.LayoutContainer>
    )
}