import React from 'react'
import PlayerButton from '../PlayerButton'

export default function Player() {
    return(
        <div className="h-full w-1/3 bg-primary-purple-300 flex flex-col gap-4 px-4 overflow-y-hidden items-center justify-between py-10">
            <div className="w-full flex items-center justify-center gap-2">
                <img className="h-10" src="favicon.svg" />
                <span className="font-bold text-text-body-300">Playing now</span>
            </div>
            <div className="border-dashed rounded-xl h-80 w-72 flex items-center justify-center  bg-primary-purple-100">
                <span className="font-bold text-text-body-300">Select a podcast to listen</span>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex gap-1 items-center">
                    <span className="text-text-body-300">00 : 00</span>
                    <div className="h-1 w-44 bg-text-body-300"></div>
                    <span className="text-text-body-300">00 : 00</span>
                </div>
                <div className="flex gap-2/3 items-center justify-center">
                    <PlayerButton angle={0} background="transparent" icon="icons/shuffle.svg" />
                    <PlayerButton angle={180} background="transparent" icon="icons/fastfoward.svg" />
                    <PlayerButton angle={0} background="primary-purple-100" icon="icons/play.svg" />
                    <PlayerButton angle={0} background="transparent" icon="icons/fastfoward.svg" />
                    <PlayerButton angle={0} background="transparent" icon="icons/repeat.svg" />
                </div>
            </div>
        </div>
    )
}
