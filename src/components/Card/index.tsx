import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Container, Details } from './styles'

export default function Card({episode}: any) {
    const {
        id,
        title,
        thumbnail,
        publishedAt,
        durationString,
        members
    } = episode

    return (
        <Container>
            <Image
               width={192}
               height={192}
               src={thumbnail}
               alt={title}
               objectFit="cover"
            />
            <Details>
                <Link href={`/episodes/${id}`}>
                    <a>{title}</a>
                </Link>
                <p>{members}</p>
                <span>{publishedAt}</span>
                <span>{durationString}</span>
            </Details>
            <button type="button">
                <img
                  src="icons/play.svg" 
                  alt="Play episode"
                />
            </button>
        </Container>
    )
}
