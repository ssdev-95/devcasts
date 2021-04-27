import { ReactNode, createContext, useContext, useState } from 'react'

interface Episode {
	id: string;
	name: string;
	description: string;
	thumb: string;
	duration: number,
	formatedDuration: string;
	url: string;
	member: string;
	publishedAt: string;
}

interface PlayerContextData {
    isPlaying: boolean;
    isLooping: boolean;
    isInShuffle: boolean;

    episodes: Episode[];
    currentEpIndex: number;

    play: ()=>void;
    pause: ()=>void;
    playList: (list: Episode[], index: number)=>void;

    playNext: ()=>void;
    playPrevious: ()=>void;
    
    togglePlay: ()=>void;
    toggleShuffle: ()=>void;
    toggleLoop: ()=>void;

    setPlayingState:  (state: boolean)=>void;
    clearPlayingState: ()=>void;
}

interface ProviderProps {
    children: ReactNode;
}

export const PlayerContext = createContext({} as PlayerContextData)

export const PlayerProvider = ({ children }: ProviderProps) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLooping, setIsLooping] = useState(false)
    const [isInShuffle, setIsInShuffle] = useState(false)

    const [currentEpIndex, setCurrentEpIndex] = useState(0)

    const [episodes, setEpisodes] = useState([])

    function play() {
        setIsPlaying(true)
    }

    function pause() {
        setIsPlaying(false)
    }

    const playList = (list: Episode[], index: number) => {
        setEpisodes(list)
        setCurrentEpIndex(index)
        setIsPlaying(true)
    }

    const hasPrevious = (currentEpIndex-1)>0
    const hasNext = isInShuffle || (currentEpIndex+1)<episodes.length

    const playNext = () => {
         if(isInShuffle) {
            const nextRandomEpisodeIndex = Math.floor(Math.random()*episodes.length)
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

    const clearPlayingState = () => {
        setEpisodes([])
        setCurrentEpIndex(0)
    }
    
    return (
        <PlayerContext.Provider value={{
            isPlaying,
            isLooping,
            isInShuffle,
            
            episodes,
            currentEpIndex,

            play,
            pause,
            playList,
            playNext,
            playPrevious,
            togglePlay,
            toggleShuffle,
            toggleLoop,
            setPlayingState,
            clearPlayingState
        }}>
            { children }
        </PlayerContext.Provider>
    )
}

export function usePlayer() {
    return useContext(PlayerContext)
}
