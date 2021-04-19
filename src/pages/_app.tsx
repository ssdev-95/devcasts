import 'tailwindcss/tailwind.css'
import Head from 'next/head'

import { PodcastsProvider } from '../contexts/Podcasts'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Dev.casts&trade;</title>
			</Head>
			<PodcastsProvider>
				<Component {...pageProps} />
			</PodcastsProvider>
		</>
	)
}

export default MyApp
