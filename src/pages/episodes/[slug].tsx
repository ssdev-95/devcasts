import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import ptBR from 'date-fns/locale/pt-BR'
import { format, parseISO } from 'date-fns'

import { api } from '../../services/api'
import { formatDuration } from '../../utils/formatDuration'

import { EpisodeContainer, Thumbnail, Description } from '../../styles/pages/episode'

interface Episode {
	id: string;
	title: string;
	thumbnail: string;
	members: string;
	publishedAt: string;
	duration: number;
	durationString: string;
    description: string;
	url: string;
}

interface EpisodeProps {
    episode: Episode;
}

export default function Episode({ episode }: EpisodeProps) {
    return (
        <EpisodeContainer>
            <Thumbnail>
                <button type="button">
                    <Link href="/">
                        <img src="icons/arrow.svg" alt="back to home"/>
                    </Link>
                </button>
                <Image width={700} height={160} src={episode.thumbnail} objectFit="cover" />
                <button type="button">
                    <img src="icons/play.svg" alt="Play episode"/>
                </button>
            </Thumbnail>
            <header>
                <h1>{episode.title}</h1>
                <span>{episode.members}</span>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationString}</span>
            </header>

            <Description dangerouslySetInnerHTML={{__html: episode.description}} />
        </EpisodeContainer>
    )
}

//incremenal static regeneration
export const getStaticPaths:GetStaticPaths = async () => {
    const { data } = await api.get('episodes', {
		params: {
			_limit: 3,
			_sort: 'published_at',
			_order: 'desc'
		}
	})

    const paths = data.map(ep=>{
        return {
            params: {
                slug: ep.id
            }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps:GetStaticProps = async (ctx) => {
    const { slug } = ctx.params
    const { data } = await api.get(`/episodes/${slug}`)

    const episode = {
			id: data.id,
			title: data.title,
			thumbnail: data.thumbnail,
			members: data.members,
			publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR}),
			duration: Number(data.file.duration),
			durationString: formatDuration(Number(data.file.duration)),
			description: data.description,
			url: data.file.url
	}

    return {
        props: {
            episode,
        },
        revalidate: 3600*24,
    }
}
