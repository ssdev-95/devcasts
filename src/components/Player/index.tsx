import React from 'react'
import { PlayerContainer, Heading } from './styles'

export default function Player() {
    return (
        <PlayerContainer>
            <Heading>
                <img src="/favicon.svg" />
                <span>Listening now</span>
            </Heading>
        </PlayerContainer>
    )
}
