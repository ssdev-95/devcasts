import Head from 'next/head'
import { Container, Card } from '../styles/pages/Home'

export default function Home() {
	//lol
	return (
		<Container>
			<Head>
				<title>Home | Devcasts&trade;</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<div>
				<h2>Latest episodes</h2>
				<ul>
					<Card>
						<img src="" alt=""/>
						<div></div>
						<button>
							<img src="icons/play.svg" alt="Icon"/>
						</button>
					</Card>
				</ul>
			</div>
			<div>
				<h2>All episodes</h2>
			</div>

		</Container>
	)
}
