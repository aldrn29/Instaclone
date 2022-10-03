import { useEffect, useState } from 'react';
import { lightTheme, darkTheme, ColorTheme } from '../styles/theme';

const useDarkMode = () => {
    const [colorTheme, setColorTheme] = useState<ColorTheme>(lightTheme);
    
    // state의 값 변경 + local 저장 값도 변경
    const setMode = (mode: ColorTheme) => {
        mode === lightTheme
            ? window.localStorage.setItem('theme', 'light')
            : window.localStorage.setItem('theme', 'dark')
        setColorTheme(mode);
    };
  
    const toggleColorTheme = () => {
        colorTheme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
    };
  
    // 마운트 되면 localStorage에 'theme'이 있는지 찾는다.
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme !== null) { // localTheme이 존재한다면
            if (localTheme === 'dark') {
                setColorTheme(darkTheme);
            } else {
                setColorTheme(lightTheme);
            }
        }
    }, []);
  
    return { colorTheme, toggleColorTheme };
};

export default useDarkMode;