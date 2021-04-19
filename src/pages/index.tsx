import React from 'react'

import Header from '../components/Header'
import Player from '../components/Player'
import Dashboard from '../components/Dashboard'

export default function Home() {
	return (
		<div className="w-full h-screen flex">
			<div className="h-full w-2/3">
				<Header />
				<Dashboard />
			</div>
			<Player />
		</div>
	)
}
