import { React, useEffect, useState, useRef }  from 'react';
import BroadcastListCard from './BroadcastListCard';

import { fetchBroadcasts, fetchProfileImages } from '../../broadcasterApi/twitch';

const LiveBroadcastList = () => {
    const [broadcastList, setBroadcastList] = useState([]);
    const [profileImageURLs, setProfileImageURLs] = useState([]);
    
    useEffect(() => {
        const getBroadcasts = async () => {
            const broadcasts = await fetchBroadcasts();
            setBroadcastList(broadcasts);
        }
        getBroadcasts();
    }, []);

    if (broadcastList.length > 0)
    {
        const getProfileImages = async(broadcasts) => {
            const profileImages = await fetchProfileImages(broadcasts);
            setProfileImageURLs(profileImages);
        };

        if (profileImageURLs.length == 0)
        {
            getProfileImages(broadcastList);
        }
        
        return (
            <div>
                <div className='flex-row items-center text-lg font-semibold'>
                    Live Broadcasts
                </div>
                <div>
                    {broadcastList.length > 0 && broadcastList.map((broadcast) => (
                        <BroadcastListCard 
                            streamerName={broadcast.user_name}
                            streamCategory={broadcast.game_name}
                            viewCount={broadcast.viewer_count}
                            isLive={broadcast.type}
                            profileImageURL={profileImageURLs[broadcast.user_id]}
                            streamURL={'https://twitch.com/' + broadcast.user_name}
                        />
                    ))}
                </div>
                <div className='self-center text-center'>
                    <a href='#'>More broadcasts...</a>
                </div>
            </div>
        );
    }
    else
    {
        return <div>Loading...</div>
    }
};

export default LiveBroadcastList;