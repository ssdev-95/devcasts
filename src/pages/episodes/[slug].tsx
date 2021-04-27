import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { formatDate, formatDuration } from '../../utils/formatter'

import { EpisodeContainer, Thumbnail } from '../../styles/pages/Episode'
import { episodes } from '../../../server.json'

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
		thumb,
		formatedDuration,
		member,
		publishedAt
	} = episode

	return (
		<EpisodeContainer>
			<Thumbnail>
				<Link href="/">
					<button>
						<img src="/arrow.svg" alt="Icon" />
					</button>
				</Link>
				<Image
				   src={thumb}
				   width={750}
				   height={475}
				   objectFit="cover"
				/>
				<button>
					<img src="/play.svg" alt="Icon" />
				</button>
			</Thumbnail>
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
