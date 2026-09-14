export function formatTime(time){
    return time.split('T')[0].split("-").reverse().join('.')
}

export function formatTimeForInput(time){
    return time.split('T')[0]
}