import React, { useContext, useEffect } from 'react'

import Header from '../components/Header'
import Player from '../components/Player'
import Dashboard from '../components/Dashboard'

import { PodcastsContext } from '../contexts/Podcasts'

export default function Home(props) {
	const {onRetrieve} = useContext(PodcastsContext)

	useEffect(()=>{
		onRetrieve(props.episodes)
	}, [])

	return (
		<div></div>
	)
}

export async function getStaticProps() {
	const response = await fetch('http://localhost:3333/episodes')
	const data = await response.json()

	return {
		props: {
			episodes: data,
		},
		revalidate: 60*60*8
	}
}
