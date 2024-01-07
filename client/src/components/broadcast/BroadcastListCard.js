import React from 'react';
import liveIcon from '../../images/live_icon.png';

const BroadcastListCard = ({ streamerName, streamTitle, viewCount, isLive, profileImgURL }) => {
    return (
        <div className='flex bg-slate-200 space-x-1 w-full'>
            <div className='flex space-x-1'>
                <div>
                    <img className='rounded-full h-6 w-6' src={profileImgURL} alt='' />
                </div>
                <div>
                    <span className='text-sm'>{streamerName}</span>
                </div>
            </div>
            <div className='flex'>
                <div>
                    &nbsp;- <span className='text-xs'>'{streamTitle}'</span>
                </div>
            </div>
            <div className='self-center flex'>
                <div>
                    <img src={liveIcon} alt='Live Icon' className='h-2 w-2 rounded-full'/>
                </div>  
            </div>
            <div className='text-xs self-center flex'>
                {viewCount}
            </div>
        </div>
    );
};

export default BroadcastListCard;