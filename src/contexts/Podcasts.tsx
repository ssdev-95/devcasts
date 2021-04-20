import { ReactNode, useState, createContext } from 'react'

interface ProviderProps {
    children: ReactNode;
}

interface Podcast {
    id: string;
    thumbnail: string;
    title: string;
    description: string;
    members: string;
    file: {
        url: string;
        type: string;
        duration: number;
    };
    published_at: string;
}

interface ContextData {
    podcasts: any[];
    onRetrieve: (params: any) => void;
    formatDuration: (params: number) => string;
}

export const PodcastsContext = createContext({} as ContextData)

export const PodcastsProvider = ({children}: ProviderProps) => {
    const initials = [
        {
            id: '',
            thumbnail: 'https://github.com/diego3g.png',
            title: 'A vida e boa',
            description: '',
            members: 'Diegao, Maykao',
            file: {
                url: '',
                type: '',
                duration: 5778,
            },
            published_at: '19 Apr 21'
        },
        {
            id: '',
            thumbnail: 'https://github.com/maykbrito.png',
            title: 'Como programar like a god',
            description: '',
            members: 'Maykao',
            file: {
                url: '',
                type: '',
                duration: 5778,
            },
            published_at: '19 Apr 21'
        },
        {
            thumbnail: 'https://github.com/xSallus.png',
            title: 'Bora viver',
            members: 'Others',
            file: {
                url: '',
                type: '',
                duration: 5778,
            },
            published_at: '19 Apr 21'
        },
        {
            thumbnail: 'https://github.com/PatoGordo.png',
            title: 'Nao desita de voce',
            members: 'PatoGordo, Others',
            file: {
                url: '',
                type: '',
                duration: 5778,
            },
            published_at: '19 Apr 21'
        },
        {
            thumbnail: 'https://github.com/WelissonLuca.png',
            title: 'A vida e incrivel',
            members: 'Lucao, Others',
            file: {
                url: '',
                type: '',
                duration: 5778,
            },
            published_at: '19 Apr 21'
        },
        {
            thumbnail: 'https://github.com/filipedeschamps.png',
            title: 'A vida e delicicnha',
            members: 'Deschamps',
            file: {
                url: '',
                type: '',
                duration: 5778,
            },
            published_at: '19 Apr 21'
        },
    ]

    const [podcasts, setPodcasts] = useState(initials)

    const onRetrieve = (podcasts) => {
        setPodcasts(podcasts)
    }

    const formatDuration = (dur: Number) => {
        const durInHrs = Math.floor(Number(dur) / 3600)
        const durInMins = Number(dur) % 3600
        const durInSecs = durInMins/60

        return (`${durInHrs}:${durInMins}:${durInSecs}`)
    }

    return (
        <PodcastsContext.Provider value={{
            podcasts,
            onRetrieve,
            formatDuration
        }}>
            {children}
        </ PodcastsContext.Provider>
    )
}
