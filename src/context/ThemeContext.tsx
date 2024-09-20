import React from "react"
import { createContext } from "react"
import { useMediaQuery } from "@mui/material"
import { IThemeContextProps } from "@/interfaces/IThemeContexProps"

const ThemeContext = createContext<IThemeContextProps>({
    darkMode: false,
    volume: 0.5,
    isPlaying: false,
    isMobile: false,
    setIsPlaying: () => { },
    setVolume: () => { },
    handleVolume: () => { },
    handleToggleMode: () => { },
    handlePlayMusic: () => { },
    handleNextMusic: () => { },
    handlePauseMusic: () => { },
    handlePreviusMusic: () => { },
})

export const useThemeContext = () => React.useContext(ThemeContext)

export const ThemeContextProvider = (
    { children }: { children: React.ReactNode },
    { theme }: { theme: any }
) => {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [volume, setVolume] = React.useState(0.5)
    const [darkMode, setDarkMode] = React.useState(false)

    const isMobile = useMediaQuery("(max-width: 768px)")

    const handleVolume = () => {
        if (isPlaying) {
            setIsPlaying(false)
        } else {
            setIsPlaying(true)
        }
    }

    const handleToggleMode = () => {
        setDarkMode(!darkMode)
    }

    const handlePlayMusic = () => {
        if (isPlaying) {
            setIsPlaying(false)
        } else {
            setIsPlaying(true)
        }
    }

    const handlePauseMusic = () => {
        if (isPlaying) {
            setIsPlaying(false)
        } else {
            setIsPlaying(true)
        }
    }

    const handleNextMusic = () => {
        if(isPlaying) {
            console.log("Tocando música: " + isPlaying)
        } else {
            console.log("Tocando más canciones: " + isPlaying)
        }
    }

    const handlePreviusMusic = () => {
    }

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                volume,
                isPlaying,
                isMobile,
                setIsPlaying,
                setVolume,
                handleVolume,
                handleToggleMode,
                handlePlayMusic,
                handlePauseMusic,
                handleNextMusic,
                handlePreviusMusic,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}