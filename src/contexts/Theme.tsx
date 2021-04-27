import { ReactNode, createContext, useContext, useState } from 'react'

interface ThemeContextData {
    theme: string;
    toggleTheme: ()=>void
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        theme==='light' ? setTheme('dark') : setTheme('light')
    }

    return(
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}
