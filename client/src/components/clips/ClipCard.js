import React from 'react';
import eye_icon from '../../images/eye.png';
import { formatViewCount, formatDuration } from '../../util/numbers';

const ClipCard = ({ broadcasterName, title, viewCount, duration, url, thumbnailUrl }) => {   

    return (
        <a href={url} target='_blank'>
            <div className='flex flex-col bg-green-300 p-1 rounded-sm max-h-[20rem] max-w-[20rem] shadow-md hover:scale-110'>
                <div className='relative'>
                    <img className='max-h-[20rem] w-[20rem]' src={thumbnailUrl} alt={`${broadcasterName} clip`}/>
                    <p className='absolute bottom-1 right-1 text-white mr-1'>{formatDuration(duration)}</p>
                </div>
                <div className='bg-green-200'>
                    <p className='truncate ...'><span className='font-semibold'>{broadcasterName}</span> - {title}</p>
                </div>
                <div className='flex bg-green'>
                    <div className='self-center'>
                        <img className='max-h-4 max-w-4' src={eye_icon} />
                    </div>
                    <div className='ml-1'>
                        <p>{formatViewCount(viewCount)}</p>
                    </div>
                </div>
            </div>
        </a>
    )
};

export default ClipCard;