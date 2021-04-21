export const formatDuration = (duration: number) => {
    const hours = Math.floor(duration/3600)
    const minutes = Math.floor((duration%3600)/60)
    const seconds = minutes%60

    const finalTime = [hours, minutes, seconds]
                .map(unit=>String(unit).padStart(2, '0'))
                .join(':')
    
    return finalTime
}
