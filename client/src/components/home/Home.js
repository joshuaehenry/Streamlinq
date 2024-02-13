import React from 'react';
import LiveBroadcastList from '../broadcasts/LiveBroadcasts';
import Login from '../auth/Login';
import TrendingClips from '../clips/TrendingClips';

const Home = () => {
    return (
        <div className='flex'>
            <div className='w-[19rem] bg-green-200 shadow-sm mt-0.5 ml-0.5'>
                <LiveBroadcastList />
            </div>
            <div className='flex flex-col grow'>
                <div className='flex grow justify-center  mt-10'>
                    <div>
                        <Login />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <TrendingClips />
                </div>
            </div>
        </div>
    );
};

export default Home;