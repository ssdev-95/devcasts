import React from 'react'

export default function Card({episode}: any) {
    const {
        id,
        thumbnail,
        title,
        members,
        file,
        published_at
    } = episode

    return (
        <div key={id} className="h-32 w-96 flex rounded-2xl bg-items-background items-center justify-start gap-4 px-2 overflow-hidden">
            <img className="h-16 rounded-2xl" src={thumbnail} alt=""/>
            <div className="flex flex-col items-start justify-center overflow-x-hidden">
                <span className="text-xs">{title}</span>
                <span className="text-xs">{members}</span>
                <span className="text-xs">{`${published_at}`}</span>
            </div>
            <img className="h-8 p-2 border-solid" src="icons/play.svg" alt=""/>
        </div>
    )
}
