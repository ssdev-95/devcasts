import '../styles/globals.css'

import Header from '../components/Header'
import Player from '../components/Player'

import { PlayerProvider } from '../contexts/Player'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<PlayerProvider>
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
