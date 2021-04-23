import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { usePlayer } from '../../contexts/Player'

import { Container, Details } from './styles'

interface Podcast {
    id: string;
    title: string;
    thumbnail: string;
    members: string;
    url: string;
    durationString: string;
    publishedAt: string;
}

interface CardProps {
    episode: Podcast;
    episodeList: Podcast[];
    index: number;
}

export default function Card({ episode, index, episodeList }: CardProps) {
    const { playList } = usePlayer()
    
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
            <button onClick={()=>playList(episodeList, index)} type="button">
                <img
                  src="icons/play.svg" 
                  alt="Play episode"
                />
            </button>
        </Container>
    )
}
