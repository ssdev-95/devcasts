import React from 'react'
import { GetStaticProps } from 'next'

import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { api } from '../services/api'
import { formatDuration } from '../utils/formatDuration'

import { Main } from '../styles/home'

interface Episode {
	id: string;
	title: string;
	thumbnail: string;
	member: string;
	publishedAt: string;
	duration: number;
	durationString: string;
	description: string;
	url: string;
}

interface HomeProps {
	episodes: Episode[];
}

export default function Home({ episodes }: HomeProps) {

	return (
		<Main></Main>
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
			member: ep.members,
			publishedAt: format(parseISO(ep.published_at), 'd MMM yy', { locale: ptBR}),
			duration: Number(ep.file.duration),
			durationString: formatDuration(Number(ep.file.duration)),
			description: ep.description,
			url: ep.file.url
		}
	})

	return {
		props: {
			episodes
		},
		revalidate: 60*60*8
	}
}
