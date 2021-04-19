import React from 'react'

export default function Player() {
    return(
        <div className="h-full w-1/3 bg-primary-purple-300 flex flex-col gap-4 px-4 overflow-y-hidden items-center justify-between py-10">
            <div className="w-full flex items-center justify-center gap-2">
                <img className="h-10" src="favicon.svg" />
                <span className="font-bold text-text-body">Playing now</span>
            </div>
            <div className="border-dashed rounded-xl h-80 w-72 flex items-center justify-center  bg-primary-purple-100">
                <span className="font-bold text-text-body">Select a podcast to listen</span>
            </div>
            <div>
                <div className="flex gap-1 items-center">
                    <span>00 : 00</span>
                    <div className="h-1 w-44 bg-items-background"></div>
                    <span>00 : 00</span>
                </div>
                <div>{/**/ */}</div>
            </div>
        </div>
    )
}
