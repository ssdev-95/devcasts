import '../styles/globals.css'

import Header from '../components/Header'
import Player from '../components/Player'

function MyApp({ Component, pageProps }) {
	return (
		<div className="container">
			<div>
				<Header />
				<Component {...pageProps} />
			</div>
			<Player />
		</div>
	)
}

export default MyApp
