import React, { useContext } from 'react'
import Image from 'next/image'
import Slider from 'rc-slider'

import PlayerButton from '../PlayerButton'

import { PlayerContext } from '../../contexts/Player'

import { PlayerContainer, Header, Actions, Timer, Empty, Footer, Playing } from './styles'

import colors from '../../../colors.json'
import 'rc-slider/assets/index.css'

export default function Player() {
    const { podcasts, currentEpIndex, isPlaying } = useContext(PlayerContext)

    const episode = podcasts[currentEpIndex]

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
                       trackStyle={{ backgroundColor: '#04d361' }}
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
                    <PlayerButton
                      angle={0}
                      background="transparent"
                      icon="icons/shuffle.svg"
                    />
                    <PlayerButton
                      angle={180}
                      background="transparent"
                      icon="icons/fastfoward.svg"
                    />
                    <PlayerButton
                      angle={0}
                      background={colors.primary.purple.soft}
                      icon={isPlaying ? "icons/play.svg" : "icons/union.svg"}
                    />
                    <PlayerButton
                      angle={0}
                      background="transparent"
                      icon="icons/fastfoward.svg"
                    />
                    <PlayerButton 
                      angle={0}
                      background="transparent"
                      icon="icons/repeat.svg"
                    />
                </Actions>
            </Footer>
        </PlayerContainer>
    )
}
