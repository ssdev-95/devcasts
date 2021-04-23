import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'rc-slider'

import { usePlayer } from '../../contexts/Player'
import { formatDuration } from '../../utils/formatDuration'

import { PlayerContainer, Header, Actions, Timer, Empty, Footer, Playing, Button } from './styles'

import colors from '../../../colors.json'
import 'rc-slider/assets/index.css'

export default function Player() {
	const {
		podcasts,
		currentEpIndex,
		isPlaying,
		togglePlay,
		setPlayingState,
		playPrevious,
		playNext,
		hasNext,
		hasPrevious,
		isLooping,
		isInShuffle,
		clearPlayerState
	} = usePlayer()

	const [progress, setProgress] = useState(0)

	const audioRef = useRef<HTMLAudioElement>(null)

	const episode = podcasts[currentEpIndex]

	const playIconSrc = isPlaying ? "icons/union.svg" : "icons/play.svg"

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
		if(hasNext) {
			playNext()
		} else {
			clearPlayerState()
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
			<Header>
				<img src="favicon.svg" />
				<span>{episode ? episode.title : 'Playing now'}</span>
			</Header>
			{
				episode ? (
					<Playing>
						<Image
							width={592}
							height={592}
							src={episode.thumbnail}
							objectFit="cover"
							alt="Currently Playing"
						/>
						<strong>{episode.title}</strong>
						<span>{episode.members}</span>
					</Playing>
				) : (
					<Empty>
						<span>Select a podcast to listen</span>
					</Empty>
				)
			}
			<Footer>
				<Timer>
					<span>{formatDuration(progress)}</span>
					{
						episode ? (
							<Slider
								max={episode?.duration}
								value={progress}
								onChange={handleSeek}
								trackStyle={{ backgroundColor: colors.primary.green }}
								railStyle={{ backgroundColor: colors.primary.purple.soft }}
								handleStyle={{ borderColor: colors.primary.green, borderWidth: 4 }}
							/>
						) : (
							<div></div>
						)
					}
					<span>{formatDuration(episode?.duration ?? 0)}</span>
				</Timer>
				<Actions>
					<Button disabled={!episode || podcasts.length <= 1} style={{ background: 'rgba(0,0,0,0)' }}>
						<img
							style={{
								transform: 'rotate(0)'
							}}
							className={isInShuffle ? 'isActive' : ''}
							src="icons/shuffle.svg"
						/>
					</Button>
					<Button
						disabled={!episode || !hasPrevious}
						style={{ background: 'rgba(0,0,0,0)' }}
						onClick={playPrevious}
					>
						<img style={{ transform: 'rotate(180deg)' }} src="icons/fastfoward.svg" />
					</Button>
					<Button onClick={togglePlay} disabled={!episode} style={{ background: colors.primary.purple.medium }}>
						<img style={{ transform: 'rotate(0)' }} src={playIconSrc} />
					</Button>
					<Button
						disabled={!episode || !hasNext}
						style={{ background: 'rgba(0,0,0,0)' }}
						onClick={playNext}
					>
						<img style={{ transform: 'rotate(0)' }} src="icons/fastfoward.svg" />
					</Button>
					<Button disabled={!episode} style={{ background: 'rgba(0,0,0,0)' }}>
						<img
							style={{
								transform: 'rotate(0)'
							}}
							className={isLooping ? 'isActive' : ''}
							src="icons/repeat.svg"
						/>
					</Button>
				</Actions>
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
			</Footer>
		</PlayerContainer>
	)
}
