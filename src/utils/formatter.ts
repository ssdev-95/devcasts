import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDuration(duration: number) {
    const hours = duration/3600
    const minutes = ((duration/3600)-Math.floor(hours))*60
    const seconds = (minutes-Math.floor(minutes))*60
    
    const timeArray = [Math.floor(hours), Math.floor(minutes), Math.floor(seconds)]

    const time = timeArray.join(':').padStart(2, '0')

    console.log(time)

    return time
}

export function formatDate(date: string) {
    const dated = format(parseISO(date), 'd MMM yy', { locale: ptBR })
    return dated
}
