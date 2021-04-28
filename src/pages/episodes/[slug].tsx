import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { formatDate, formatDuration } from '../../utils/formatter'

import { EpisodeContainer, Thumbnail, PodcastDetails } from '../../styles/pages/Episode'
import { episodes } from '../../../server.json'

import { usePlayer } from '../../contexts/PlayerContext'

interface Episode {
	id: string;
	name: string;
	description: string;
	thumb: string;
	duration: number,
	formatedDuration: string;
	url: string;
	member: string;
	publishedAt: string;
}

interface EpisodeProps {
	episode: Episode;
}

export default function Episode({ episode }: EpisodeProps) {
	const {
		id,
		name,
		description,
		member,
		publishedAt,
		thumb,
	} = episode

	const { play } = usePlayer()

	return (
		<EpisodeContainer>
			<Thumbnail>
				<Link href="/">
					<button
					   style={{left: '-30px'}}
					   type="button"
					>
						<img src="/arrow.svg" alt="Icon" />
					</button>
				</Link>
				<Image
				   src={thumb}
				   width={700}
				   height={160}
				   objectFit="cover"
				/>
				<button
				   style={{right: '-30px'}}
				   onClick={()=>play(episode)}
				>
					<img src="/play.svg" alt="Icon" />
				</button>
			</Thumbnail>
			<header>
                <h1>{name}</h1>
                <span>{member}</span>
                <span>{publishedAt}</span>
            </header>
			<PodcastDetails dangerouslySetInnerHTML={{__html: description}} />
		</EpisodeContainer>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = episodes.map(ep => {
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

export const getStaticProps: GetStaticProps = async (ctx) => {
	const slug = ctx.params

	const rapisode = episodes.find(ep => ep.id === slug.slug)

	const episode = {
		id: rapisode.id,
		name: rapisode.title,
		thumb: rapisode.thumbnail,
		description: rapisode.description,
		members: rapisode.members,
		publishedAt: formatDate(rapisode.published_at),
		url: rapisode.file.url,
		duration: rapisode.file.duration,
		formatedDuration: formatDuration(rapisode.file.duration)
	}

	return {
		props: {
			episode
		},
		revalidate: 60 * 60
	}
}
