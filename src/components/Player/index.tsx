import React from 'react'
import { PlayerContainer, Heading, EmptyPlayer, Details, Footing, Actions, Trackbar } from './styles'

export default function Player() {
    return (
        <PlayerContainer>
            <Heading>
                <img src="/favicon.svg" />
                <span>Listening now</span>
            </Heading>
            <EmptyPlayer>
                <span>Select a podcast to listen</span>
            </EmptyPlayer>
            <Footing>
                <Trackbar>
                    <span></span>
                    <div></div>
                    <span></span>
                </Trackbar>
                <Actions>
                    <button>
                        <img src="/shuffle.svg" alt="Icon"/>
                    </button>
                    <button>
                        <img src="/fastfoward.svg" alt="Icon"/>
                    </button>
                    <button style={{background: 'rgba(145, 100, 250, .8)'}}>
                        <img src="/play.svg" alt="Icon"/>
                    </button>
                    <button>
                        <img style={{transform: 'rotate(180deg)'}} src="/fastfoward.svg" alt="Icon"/>
                    </button>
                    <button>
                        <img src="/repeat.svg" alt="Icon"/>
                    </button>
                </Actions>
            </Footing>
        </PlayerContainer>
    )
}
