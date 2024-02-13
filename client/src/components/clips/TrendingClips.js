import { React, useEffect, useState } from 'react';
import ClipCard from './ClipCard';

const TrendingClips = () => {
    const [clips, setClips] = useState([]);

    useEffect(() => {
        const getClips = async () => {
            // const apiUrl = 
        };
    }, []);

    return (
        <div className='bg-green-200'>
            <ClipCard 
                broadcasterName={'loltyler1'}
                thumbnailUrl={'https://clips-media-assets2.twitch.tv/GsQU35IWFaxM7Twn3Gyl0Q/AT-cm%7CGsQU35IWFaxM7Twn3Gyl0Q-preview-480x272.jpg'}
                viewCount={118878}
                duration={47.9}
                url={'https://clips.twitch.tv/CourteousAmorphousCarabeefKeyboardCat-khYVrEztPCfcbKXR'}
                title={'Tyler has some kind words for Ludwig after $100'}
            />
        </div>
    )
};

export default TrendingClips;