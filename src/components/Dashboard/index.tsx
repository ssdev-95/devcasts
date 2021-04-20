import React, { useContext } from 'react'

import Card from '../Card'

import { PodcastsContext } from '../../contexts/Podcasts'

export default function Dashboard() {
    const { podcasts, formatDuration } = useContext(PodcastsContext)

    return (
        <div className="h-full w-full flex flex-col gap-2 bg-items-shape p-10 overflow-y-hidden">
            <div className="flex flex-col gap-2">
                <span className="font-bold text-items-line text-2xl">Latest added</span>
                <div className="w-full h-36 flex overflow-x-scroll">
                    {
                        podcasts.map(cast => <Card episode={cast} />)
                    }
                </div>
            </div>
            <div className="py-2">
                <span className="font-bold text-items-line text-2xl">All episodes</span>
                <table className="overflow-y-scroll">
                    <thead>
                        <tr>
                            <td>Podcast</td>
                            <td>Members</td>
                            <td>Date</td>
                            <td>Duration</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            podcasts
                                .map(cast => (<tr>
                                    <td className="flex">
                                        <img className="h-10" src={cast.thumbnail}/>
                                        {cast.title}
                                    </td>
                                    <td>{cast.members}</td>
                                    <td>{cast.published_at}</td>
                                    <td>{formatDuration(cast.duration)}</td>
                                    <td>
                                        <img src="icons/play.svg"/>
                                    </td>
                                </tr>)
                                )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}