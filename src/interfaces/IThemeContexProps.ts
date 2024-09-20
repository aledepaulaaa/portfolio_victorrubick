export interface IThemeContextProps {
    darkMode: boolean
    isPlaying: boolean,
    isMobile: boolean
    volume: number
    setVolume: (value: number) => void
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
    handleVolume: () => void
    handleToggleMode: () => void
    handlePlayMusic: () => void
    handleNextMusic: () => void
    handlePauseMusic: () => void
    handlePreviusMusic: () => void
}