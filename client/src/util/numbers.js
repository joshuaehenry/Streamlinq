const formatViewCount = (viewCount) => {
    if (viewCount > 1000)
    {
        return Math.floor(viewCount / 1000) + '.' + (viewCount % 10) + 'K';
    }
    return viewCount;
}

const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration - (60 * minutes));

    if (seconds < 10)
    {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

export { formatViewCount, formatDuration };