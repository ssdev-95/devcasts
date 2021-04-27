import Head from 'next/head'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { HomeContainer, Card, Table } from '../styles/pages/Home'
import Slider from '../components/ThemeSwitcher'

import { formatDuration, formatDate } from '../utils/formatter'
import server from '../../server.json'

interface Episode {
	id: string;
	name: string;
	description: string;
	thumb: string;
	duration: number,
	formatedDuration: string;
	url: string;
	member: string;
	createdAt: string;
}

interface HomeProps {
	episodes: Episode[];
}

export default function Home({ episodes }: HomeProps) {
	const latest = episodes.slice(0, 2)
	const alleps = episodes.slice(2, episodes.length)
	//lol
	return (
		<HomeContainer>
			<Head>
				<title>Home | Devcasts&trade;</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Slider />
			<div>
				<h2>Latest episodes</h2>
				<ul>{
					latest.map(ep => (
						<Card key={ep.id}>
							<Image
								width={120}
								height={120}
								src={ep.thumb}
								alt="Thumbnail" />
							<div>
								<Link href={`/episodes/${ep.id}`}>
									<span>{ep.name}</span>
								</Link>
								<span>{ep.member}</span>
								<span>{`${ep.createdAt} | ${ep.formatedDuration}`}</span>
							</div>
							<button>
								<img src="/play.svg" alt="Icon" />
							</button>
						</Card>
					))
				}</ul>
			</div>
			<div>
				<h2>All episodes</h2>
				<Table>
					<thead>
						<tr>
							<th></th>
							<th>Podcast</th>
							<th>Duration</th>
							<th></th>
						</tr>
					</thead>
					<tbody>{
						alleps.map(ep => (
							<tr key={ep.id}>
								<td>
									<Image src={ep.thumb} width={80} height={80} objectFit="cover" />
								</td>
								<td>
									<div>
										<Link href={`/episodes/${ep.id}`}>
											<span>{ep.name}</span>
										</Link>
										<span>{ep.member}</span>
										<span>{ep.createdAt}</span>
									</div>
								</td>
								<td>{ep.formatedDuration}</td>
								<td>
									<button>
										<img src="/play.svg" alt="Icon" />
									</button>
								</td>
							</tr>
						))
					}</tbody>
				</Table>
			</div>

		</HomeContainer>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const list = server.episodes.map(episode => {
		const { id, title, description, members, thumbnail, file, published_at } = episode
		return {
			id: id,
			name: title,
			description: description,
			thumb: thumbnail,
			duration: file.duration,
			formatedDuration: formatDuration(file.duration),
			url: file.url,
			member: members,
			createdAt: formatDate(published_at)
		}
	})

	return {
		props: {
			episodes: list
		},
		revalidate: 60 * 60 * 2
	}
}
