import { React, useEffect, useState }  from 'react';
import BroadcastListCard from './BroadcastListCard';

const LiveBroadcastList = () => {
    const [broadcastlist, setBroadcastList] = useState([]);

    return (
        <div>
            <div className='flex-row items-center text-lg font-semibold'>
                Live Broadcasts
            </div>
            <BroadcastListCard
                streamerName={'Lirik'}
                streamTitle={'Playing some fortnite, roblox later'}
                viewCount={12036}
                isLive={true}
                profileImgURL={'https://pbs.twimg.com/profile_images/1148972773290762240/kmkJzp5I_400x400.png'}
            />
            {/*<div id='broadcast-list'>
                {broadcastlist.map(broadcast => {
                    <BroadcastListCard 
                        streamerName={broadcast.streamerName}
                        streamTitle={broadcast.streamTitle}
                        viewCount={broadcast.viewCount}
                        isLive={broadcast.isLive}
                        profileImgURL={broadcast.profileImgURL} />      
                })}
            </div>*/}
        </div>
    );
};

export default LiveBroadcastList;