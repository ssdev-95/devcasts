import '../styles/globals.css'

import Head from 'next/head'

import Header from '../components/Header'
import Player from '../components/Player'

import { PodcastsProvider } from '../contexts/Podcasts'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Dev.casts&trade;</title>
			</Head>
			<div className="container">
				<main>
					<Header />
					<PodcastsProvider>
						<Component {...pageProps} />
					</PodcastsProvider>
				</main>
				<Player />
			</div>
		</>
	)
}

export default MyApp
