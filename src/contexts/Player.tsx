import { ReactNode, useState, createContext } from 'react'

interface ProviderProps {
    children: ReactNode;
}

interface Podcast {
    id: string;
    thumbnail: string;
    title: string;
    members: string;
    url: string;
    duration: number;
}

interface ContextData {
    podcasts: Podcast[];
    currentEpIndex: number;
    isPlaying: boolean;
    play: (ep:Podcast)=>void

}

export const PlayerContext = createContext({} as ContextData)

export const PlayerProvider = ({children}: ProviderProps) => {
    const [podcasts, setPodcasts] = useState([])
    const [currentEpIndex, setCurrentEpIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const play = (ep:Podcast) => {
        setPodcasts([ep])
        setCurrentEpIndex(0)
    }

    return (
        <PlayerContext.Provider value={{
            podcasts,
            currentEpIndex,
            isPlaying,
            play
        }}>
            {children}
        </ PlayerContext.Provider>
    )
}
