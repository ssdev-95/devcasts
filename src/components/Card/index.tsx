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
        <div key={id}>
            <img src={thumbnail} alt=""/>
            <div>
                <span>{title}</span>
                <span>{members}</span>
                <span>{`${published_at}`}</span>
            </div>
            <img src="icons/play.svg" alt=""/>
        </div>
    )
}
