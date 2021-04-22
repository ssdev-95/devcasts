import React, { useContext, useRef, useEffect } from 'react'
import Image from 'next/image'
import Slider from 'rc-slider'

import { PlayerContext } from '../../contexts/Player'

import { PlayerContainer, Header, Actions, Timer, Empty, Footer, Playing, Button } from './styles'

import colors from '../../../colors.json'
import 'rc-slider/assets/index.css'

export default function Player() {
    const { podcasts, currentEpIndex, isPlaying, togglePlay, setPlayingState } = useContext(PlayerContext)

    const audioRef = useRef<HTMLAudioElement>(null)

    const episode = podcasts[currentEpIndex]

    const playIconSrc = isPlaying ? "icons/union.svg" : "icons/play.svg"

    useEffect(()=>{
      if(!audioRef.current) {
        return
      }

      if(isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }, [isPlaying])
    
    return(
        <PlayerContainer>
            <Header>
                <img src="favicon.svg" />
                <span>{episode?episode.title:'Playing now'}</span>
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
                {
                  episode ? (
                    <Slider 
                       trackStyle={{ backgroundColor: colors.primary.green }}
                       railStyle={{ backgroundColor: colors.primary.purple.soft }}
                       handleStyle={{ borderColor: colors.primary.green, borderWidth: 4 }}
                    />
                  ) : (
                    <Timer>
                        <span>00 : 00</span>
                        <div></div>
                        <span>00 : 00</span>
                    </Timer>
                  )
                }
                <Actions>
                    <Button disabled={!episode} style={{background: 'rgba(0,0,0,0)'}}>
                      <img style={{transform:'rotate(0)'}} src="icons/shuffle.svg" />
                    </Button>
                    <Button disabled={!episode} style={{background: 'rgba(0,0,0,0)'}}>
                      <img style={{transform:'rotate(180deg)'}} src="icons/fastfoward.svg" />
                    </Button>
                    <Button onClick={togglePlay} disabled={!episode} style={{background: colors.primary.purple.medium}}>
                      <img style={{transform:'rotate(0)'}} src={playIconSrc} />
                    </Button>
                    <Button disabled={!episode} style={{background: 'rgba(0,0,0,0)'}}>
                      <img style={{transform:'rotate(0)'}} src="icons/fastfoward.svg" />
                    </Button>
                    <Button disabled={!episode} style={{background: 'rgba(0,0,0,0)'}}>
                      <img style={{transform:'rotate(0)'}} src="icons/repeat.svg" />
                    </Button>
                </Actions>
                { episode && (
                  <audio
                    ref={audioRef}
                    autoPlay 
                    onPlay={()=>setPlayingState(true)} 
                    onPause={()=>setPlayingState(false)}
                    src={episode.url}
                  />
                )}
            </Footer>
        </PlayerContainer>
    )
}
