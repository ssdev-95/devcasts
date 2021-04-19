import { ReactNode, useState, createContext } from 'react'

interface ProviderProps {
    children: ReactNode;
}

interface Podcast {
    thumbnail: string;
    name: string;
    integrants: string;
    duration: number;
    published_at: string;
}

interface ContextData {
    podcasts: Podcast[];
}

export const PodcastsContext = createContext({} as ContextData)

export const PodcastsProvider = ({children}: ProviderProps) => {
    const initials = [
        {
            thumbnail: 'https://github.com/diego3g.png',
            name: 'A vida e boa',
            integrants: 'string',
            duration: 5778,
            published_at: '19 Apr 21'
        },
        {
            thumbnail: 'https://github.com/maykbrito.png',
            name: 'Como programar like a god',
            integrants: 'string',
            duration: 5778,
            published_at: '19 Apr 21'
        },
        {
            thumbnail: 'https://github.com/xSallus.png',
            name: 'Bora viver',
            integrants: 'string',
            duration: 5778,
            published_at: '19 Apr 21'
        },
        {
            thumbnail: 'https://github.com/PatoGordo.png',
            name: 'Nao desita de voce',
            integrants: 'string',
            duration: 5778,
            published_at: '19 Apr 21'
        },
        {
            thumbnail: 'https://github.com/WelissonLuca.png',
            name: 'A vida e incrivel',
            integrants: 'string',
            duration: 5778,
            published_at: '19 Apr 21'
        },
        {
            thumbnail: 'https://github.com/filipedeschamps.png',
            name: 'A vida e delicicnha',
            integrants: 'string',
            duration: 5778,
            published_at: '19 Apr 21'
        },
    ]

    const [podcasts, setPodcasts] = useState(initials)

    // const onRetrieve = (podcasts) => {
    //     setPodcasts(podcasts)
    // }

    return (
        <PodcastsContext.Provider value={{
            podcasts
        }}>
            {children}
        </ PodcastsContext.Provider>
    )
}
