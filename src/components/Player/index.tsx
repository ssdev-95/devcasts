import React from 'react'
import PlayerButton from '../PlayerButton'

import { PlayerContainer, Actions, Timer } from './styles'
import colors from '../../../colors.json'

export default function Player() {
    return(
        <PlayerContainer>
            <div>
                <img src="favicon.svg" />
                <span>Playing now</span>
            </div>
            <div>
                <span>Select a podcast to listen</span>
            </div>
            <div>
                <Timer>
                    <span>00 : 00</span>
                    <div></div>
                    <span>00 : 00</span>
                </Timer>
                <Actions>
                    <PlayerButton angle={0} background="transparent" icon="icons/shuffle.svg" />
                    <PlayerButton angle={180} background="transparent" icon="icons/fastfoward.svg" />
                    <PlayerButton angle={0} background={colors.primary.purple["100"]}icon="icons/play.svg" />
                    <PlayerButton angle={0} background="transparent" icon="icons/fastfoward.svg" />
                    <PlayerButton angle={0} background="transparent" icon="icons/repeat.svg" />
                </Actions>
            </div>
        </PlayerContainer>
    )
}
