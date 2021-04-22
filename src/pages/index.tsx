import React, { useContext} from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { formatDuration } from '../utils/formatDuration'
import { api } from '../services/api'

import Card from '../components/Card'
import { Main, Section } from '../styles/pages/home'

import { PlayerContext } from '../contexts/Player'

interface Episode {
	id: string;
	title: string;
	thumbnail: string;
	members: string;
	publishedAt: string;
	duration: number;
	durationString: string;
	url: string;
}

interface HomeProps {
	latestEps: Episode[];
	allEps: Episode[];
}

export default function Home({ latestEps, allEps }: HomeProps) {

	const { play } = useContext(PlayerContext)

	return (
		<Main>
			<Section >
				<h2>Latest</h2>
				<ul>{
					latestEps.map(ep=>{
						return (
							<li key={ep.id}>
								<Card episode={ep} />
							</li>
						)
					})
				}</ul>
			</Section>
			<Section >
				<h2>All Episodes</h2>
				<table cellSpacing={0}>
					<thead>
						<tr>
							<th></th>
							<th>Podcast</th>
							<th>Members</th>
							<th>Date</th>
							<th>Duration</th>
							<th></th>
						</tr>
					</thead>
					<tbody>{
						allEps.map(ep=>{
							return(
								<tr key={ep.id}>
									<td>
										<Image
										   width={120}
										   height={120}
										   src={ep.thumbnail}
										   alt={ep.title}
										   objectFit="cover"
										/>
									</td>
									<td>
										<Link href={`/episodes/${ep.id}`}>
											<a>{ep.title}</a>
										</Link>
									</td>
									<td>{ep.members}</td>
									<td style={{width:'110px'}}>{ep.publishedAt}</td>
									<td>{ep.durationString}</td>
									<td>
									<button onClick={()=>play(ep)} type="button">
										<img src="icons/play.svg" alt="Play Episode" />
									</button>
									</td>
								</tr>
							)
						})
					}</tbody>
				</table>
			</Section>
		</Main>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await api.get('episodes', {
		params: {
			_limit: 12,
			_sort: 'published_at',
			_order: 'desc'
		}
	})

	const episodes = data.map(ep=>{
		return {
			id: ep.id,
			title: ep.title,
			thumbnail: ep.thumbnail,
			members: ep.members,
			publishedAt: format(parseISO(ep.published_at), 'd MMM yy', { locale: ptBR}),
			duration: Number(ep.file.duration),
			durationString: formatDuration(Number(ep.file.duration)),
			url: ep.file.url
		}
	})

	const latestEps = episodes.slice(0, 2)
	const allEps = episodes.slice(2, episodes.length)

	return {
		props: {
			latestEps,
			allEps
		},
		revalidate: 60*60*8
	}
}
