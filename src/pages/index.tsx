import Head from 'next/head'
import { Container } from '../styles/pages/Home'

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Home | Devcasts&trade;</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>

		</Container>
	)
}
