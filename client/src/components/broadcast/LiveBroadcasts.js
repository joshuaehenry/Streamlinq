import { React, useEffect, useState }  from 'react';
import BroadcastListCard from './BroadcastListCard';
import axios from 'axios';

const LiveBroadcastList = () => {
    const [broadcastList, setBroadcastList] = useState([]);

    const listUrl = "http://localhost:5000/twitch/list";
    const searchUrl = "http://localhost:5000/twitch/search";

    // Search for the list of live streamers (sorted by view count).
    useEffect(() => {
        axios.get(listUrl)
        .then(res => {
            setBroadcastList(appendBroadcasterImages(res.data));
        })
        .catch(err => {
            console.error(err);
        });
    }, []);

    function appendBroadcasterImages(broadcasts)
    {
        /*
        * Get each broadcaster's profile image url and add them to the broadcastList array.
        */
        broadcasts.forEach((broadcast) => {
            axios.get(`${searchUrl}?id=${broadcast.user_id}`)
            .then(res => {
                broadcast['profile_image_url'] = res.data[0].profile_image_url;
            })
            .catch(err => {
                console.error(err);
            });
        });

        return broadcasts;
    }

    return (
        <div>
            <div className='flex-row items-center text-lg font-semibold'>
                Live Broadcasts
            </div>
            <div>
                {broadcastList.map((broadcast, index) => (
                    
                    <BroadcastListCard 
                        streamerName={broadcast.user_name}
                        streamTitle={broadcast.title}
                        streamCategory={broadcast.game_name}
                        viewCount={broadcast.viewer_count}
                        isLive={broadcast.type}
                        profileImgURL={broadcast.profile_image_url}
                        streamURL={'https://twitch.com/' + broadcast.user_name}
                    />
                ))}
            </div>
            <div className='self-center text-center'>
                <a href='#'>More broadcasts...</a>
            </div>
        </div>
    );
};

export default LiveBroadcastList;