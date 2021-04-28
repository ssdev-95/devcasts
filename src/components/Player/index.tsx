import React, { useRef, useState, useEffect } from 'react'
import Slider from 'rc-slider'
import Image from 'next/image'

import { PlayerContainer, Heading, EmptyPlayer, Details, Footing, Actions, Trackbar, EmptyTrack } from './styles'

import colors from '../../styles/colors.json'

import { usePlayer } from '../../contexts/PlayerContext'
import { formatDuration } from '../../utils/formatter'

export default function Player() {
    const {
        episodes,
        currentEpIndex,
        isPlaying,
        isLooping,
        togglePlay,
        playPrevious,
        playNext,
        hasNext,
        hasPrevious,
        clearPlayingState,
        setPlayingState,
        toggleShuffle,
        toggleLoop
    } = usePlayer()

    const audioRef = useRef<HTMLAudioElement>()

    const [progress, setProgress] = useState(0)

    const episode = episodes[currentEpIndex]

    const playIconSrc = isPlaying ? "/union.svg" : "/play.svg"

    const progresListener = () => {
        audioRef.current.currentTime = 0

        audioRef.current.addEventListener('timeupdate', () => {
            setProgress(Math.floor(audioRef.current.currentTime))
        })
    }

    const handleSeek = (amount: number) => {
        audioRef.current.currentTime = amount
        setProgress(amount)
    }

    const handleEpisodeEnd = () => {
        if (hasNext) {
            playNext()
        } else {
            clearPlayingState()
        }
    }

    useEffect(() => {
        if (!audioRef.current) {
            return
        }

        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    return (
        <PlayerContainer>
            <Heading>
                <img src="/favicon.svg" />
                <span>Listening now</span>
            </Heading>
            {
                episode ? (
                    <Details>
                        <Image
                            width={592}
                            height={592}
                            src={episode.thumb}
                            objectFit="cover"
                            alt="Currently Playing"
                        />
                        <strong>{episode.name}</strong>
                        <span>{episode.member}</span>
                    </Details>
                ) : (
                    <EmptyPlayer>
                        <span>Select a podcast to listen</span>
                    </EmptyPlayer>
                )
            }

            <Footing>
                <Trackbar>
                    <span>{formatDuration(progress)}</span>
                    {
                        episode ? <Slider
                            max={episode?.duration}
                            value={progress}
                            onChange={handleSeek}
                            trackStyle={{ backgroundColor: colors.green }}
                            railStyle={{ backgroundColor: colors.purple.light }}
                            handleStyle={{ borderColor: colors.green, borderWidth: 4 }}
                        /> : <EmptyTrack></EmptyTrack>
                    }
                    <span>{formatDuration(episode?.duration ?? 0)}</span>
                </Trackbar>
                <Actions>
                    <button
                        disabled={!episode || episodes.length <= 1}
                        onClick={toggleShuffle}
                        type="button"
                    >
                        <img src="/shuffle.svg" alt="Icon" />
                    </button>
                    <button
                        disabled={!episode || !hasPrevious}
                        onClick={playPrevious}
                        type="button"
                    >
                        <img style={{ transform: 'rotate(180deg)' }} src="/fastfoward.svg" alt="Icon" />
                    </button>
                    <button
                        onClick={togglePlay}
                        disabled={!episode}
                        style={{ background: 'rgba(145, 100, 250, .8)' }}
                        type="button"
                    >
                        <img src={playIconSrc} alt="Icon" />
                    </button>
                    <button
                        disabled={!episode || !hasNext}
                        onClick={playNext}
                        type="button"
                    >
                        <img src="/fastfoward.svg" alt="Icon" />
                    </button>
                    <button
                        disabled={!episode}
                        onClick={toggleLoop}
                        type="button"
                    >
                        <img src="/repeat.svg" alt="Icon" />
                    </button>
                </Actions>
            </Footing>
            {episode && (
                <audio
                    onLoadedMetadata={progresListener}
                    ref={audioRef}
                    autoPlay
                    loop={isLooping}
                    onPlay={() => setPlayingState(true)}
                    onPause={() => setPlayingState(false)}
                    onEnded={handleEpisodeEnd}
                    src={episode.url}
                />
            )}
        </PlayerContainer>
    )
}
