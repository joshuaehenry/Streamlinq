import React from 'react';
import liveIcon from '../../images/live_icon.png';

const BroadcastListCard = ({ streamerName, streamTitle, streamCategory, viewCount, streamURL, profileImgURL }) => {
    return (
        <a href={streamURL} target='_blank'>
        <div className='flex bg-slate-50 justify-between min-w-1 p-1 hover:bg-slate-200'>
            <div className='flex self-center space-x-2'>
                <img className='self-center rounded-full h-8 w-8 border-2 border-slate-500' src={profileImgURL} alt={streamerName} />
                <div className='flex-col'>
                    <div>
                        <span className='text-sm font-semibold'>{streamerName}</span>
                    </div>
                    <div className='text-xs max-w-xs overflow-hidden overflow-elipsis'>
                        {streamCategory}
                    </div>
                </div>
            </div>
            <div className='flex text-xs self-center space-x-1'>
                <div className='self-center '>
                    <img src={liveIcon} alt='Live Icon' className='h-2 w-2 rounded-full'/>
                </div>
                <div> 
                    {viewCount}
                </div>
            </div>
        </div>
        </a>
    );
};

export default BroadcastListCard;