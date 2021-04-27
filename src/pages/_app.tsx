import '../styles/globals.css'

import Header from '../components/Header'
import Player from '../components/Player'

import { ThemeProvider } from '../contexts/Theme'
import { PlayerProvider } from '../contexts/PlayerContext'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<PlayerProvider>
				<div className="appcontainer">
					<div>
						<Header />
						<Component {...pageProps} />
					</div>
					<Player />
				</div>
			</PlayerProvider>
		</ThemeProvider>
	)
}

export default MyApp
