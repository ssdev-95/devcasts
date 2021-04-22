import '../styles/globals.css'

import Head from 'next/head'

import Header from '../components/Header'
import Player from '../components/Player'

import { PlayerProvider } from '../contexts/Player'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<PlayerProvider>
			<Head>
				<title>Dev.casts&trade;</title>
			</Head>
			<div className="container">
				<main>
					<Header />
					<Component {...pageProps} />
				</main>
				<Player />
			</div>
			</PlayerProvider>
		</>
	)
}

export default MyApp
