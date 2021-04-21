import React from 'react'
import PlayerButton from '../PlayerButton'

import { PlayerContainer, Header, Actions, Timer, Section, Footer } from './styles'
import colors from '../../../colors.json'

export default function Player() {
    return(
        <PlayerContainer>
            <Header>
                <img src="favicon.svg" />
                <span>Playing now</span>
            </Header>
            <Section>
                <span>Select a podcast to listen</span>
            </Section>
            <Footer>
                <Timer>
                    <span>00 : 00</span>
                    <div></div>
                    <span>00 : 00</span>
                </Timer>
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
                      icon="icons/play.svg"
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
