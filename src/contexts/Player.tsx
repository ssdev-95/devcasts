import { ReactNode, useState, useContext, createContext } from 'react'

interface ProviderProps {
    children: ReactNode;
}

interface Podcast {
    id: string;
    title: string;
    thumbnail: string;
    members: string;
    url: string;
    durationString: string;
    duration: number;
    publishedAt: string;
}

interface ContextData {
    podcasts: Podcast[];
    currentEpIndex: number;
    isPlaying: boolean;
    hasPrevious: boolean;
    hasNext: boolean;
    isLooping: boolean;
    isInShuffle: boolean;
    play: (ep:Podcast)=>void;
    playList: (list: Podcast[], index: number)=>void;
    togglePlay: ()=>void;
    toggleShuffle: ()=>void;
    toggleLoop: ()=>void;
    playNext: ()=>void;
    playPrevious: ()=>void;
    setPlayingState: (state: boolean)=>void;
    clearPlayerState: ()=>void;
}

export const PlayerContext = createContext({} as ContextData)

export const PlayerProvider = ({children}: ProviderProps) => {
    const [podcasts, setPodcasts] = useState([])

    const [currentEpIndex, setCurrentEpIndex] = useState(0)

    const [isPlaying, setIsPlaying] = useState(false)
    const [isLooping, setIsLooping] = useState(false)
    const [isInShuffle, setIsInShuffle] = useState(false)

    const play = (ep:Podcast) => {
        setPodcasts([ep])
        setCurrentEpIndex(0)
        setIsPlaying(true)
    }

    const playList = (list: Podcast[], index: number) => {
        setPodcasts(list)
        setCurrentEpIndex(index)
        setIsPlaying(true)
    }

    const hasPrevious = (currentEpIndex-1)>0
    const hasNext = isInShuffle || (currentEpIndex+1)<podcasts.length

    const playNext = () => {
         if(isInShuffle) {
            const nextRandomEpisodeIndex = Math.floor(Math.random()*podcasts.length)
            setCurrentEpIndex(nextRandomEpisodeIndex)
         } else if(hasNext) {
            setCurrentEpIndex(currentEpIndex+1)
         }
    }

    const playPrevious = () => {
        hasPrevious && setCurrentEpIndex(currentEpIndex-1)
    }

    const togglePlay = () => { 
        setIsPlaying(!isPlaying)
    }

    const toggleShuffle = () => {
        setIsInShuffle(!isInShuffle)
    }

    const toggleLoop = () => {
        setIsLooping(!isLooping)
    }

    const setPlayingState = (state: boolean) => {
        setIsPlaying(state)
    }

    const clearPlayerState = () => {
        setPodcasts([])
        setCurrentEpIndex(0)
    }

    return (
        <PlayerContext.Provider value={{
            podcasts,
            currentEpIndex,
            isPlaying,
            hasPrevious,
            hasNext,
            isLooping,
            isInShuffle,
            play,
            togglePlay,
            setPlayingState,
            playNext,
            playPrevious,
            playList,
            toggleShuffle,
            toggleLoop,
            clearPlayerState
        }}>
            {children}
        </ PlayerContext.Provider>
    )
}

export const usePlayer = () => {
    return useContext(PlayerContext)
}
