import Header from './Header'
import Menu from './Menu'
import { useContext } from 'react';
import { ThemeContext } from '../pages/_app';
import { lightTheme, ColorTheme } from '../styles/theme';
import styled from "styled-components";

interface ToggleProps {
    colorTheme: ColorTheme;
}

const Layout = ({ children }) => {
    const { colorTheme, toggleColorTheme } = useContext(ThemeContext);
    return (
        <>
            <title>Instagram</title>
            <Header />
            <main>{children}</main>
            <Menu />
            <ToggleButton onClick={toggleColorTheme} colorTheme={colorTheme}>
                {colorTheme === lightTheme ? '다크 모드' : '라이트 모드'}
            </ToggleButton>
            
        </>
    )
}

export default Layout;

const ToggleButton = styled.button<ToggleProps>`
    position: fixed;
    right: 0;
    bottom: 100px;
    color: ${({ colorTheme }) => colorTheme.MAIN};
    background-color: ${({ colorTheme }) => colorTheme.BACKGROUND};
    cursor: pointer;
`;