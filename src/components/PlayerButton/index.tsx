import React from 'react'

interface PlayerButtonProps {
    icon: string;
    background: string;
    angle: number;
}

export default function PlayerButton({icon, background, angle}: PlayerButtonProps) {
    return (
        <div className={`flex items-center py-3 px-4 justify-center bg-${background} hover:bg-primary-purple-200 cursor-pointer rounded-xl`}>
            <img className={`transform rotate-${angle} p-0 m-0 filter sepia`} src={icon} />
        </div>
    )
}
