import '../styles/globals.css'
import Layout from '../components/Layout'
import useDarkMode  from '../hooks/useDarkMode'
import { createContext } from 'react'
import { lightTheme, ColorTheme } from '../styles/theme';

interface ContextProps { 
    colorTheme: ColorTheme;
    toggleColorTheme: () => void;
}
  
// Context 생성
export const ThemeContext = createContext<ContextProps>({
    colorTheme: lightTheme, 
    toggleColorTheme: () => { 
        return null
    },
})

function MyApp({ Component, pageProps }) {
    const { colorTheme, toggleColorTheme } = useDarkMode();

    return (
        <ThemeContext.Provider value={{ colorTheme, toggleColorTheme }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeContext.Provider>
    )
}

export default MyApp
