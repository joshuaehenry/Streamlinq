import React from 'react';
import LiveBroadcastList from './LiveBroadcasts';
import Login from './Login';

const Home = () => {
    return (
        <div className='flex'>
            <div className='w-[19rem] bg-green-200 shadow-sm mt-0.5 ml-0.5'>
                <LiveBroadcastList />
            </div>
            <div className='flex bg-green-100 grow justify-center mt-10'>
                <Login />
            </div>
        </div>
    );
};

export default Home;