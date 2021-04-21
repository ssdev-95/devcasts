import React from 'react'
import { Button } from './styles'

interface PlayerButtonProps {
    icon: string;
    background: string;
    angle: number;
}

export default function PlayerButton({icon, background, angle}: PlayerButtonProps) {
    return (
        <Button
          style={{background: background}}>
            <img style={{transform:`rotate(${angle}deg)`}} src={icon} />
        </Button>
    )
}
