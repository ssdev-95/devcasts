import '../styles/globals.css'

import Header from '../components/Header'
import Player from '../components/Player'

import { ThemeProvider } from '../contexts/Theme'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<div className="appcontainer">
				<div>
					<Header />
					<Component {...pageProps} />
				</div>
				<Player />
			</div>
		</ThemeProvider>
	)
}

export default MyApp
