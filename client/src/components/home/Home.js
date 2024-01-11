import React from 'react';
import NavigationBar from '../menu/NavigationBar';
import LiveBroadcastList from '../broadcast/LiveBroadcasts';

const Home = () => {
    return (
        <div className='flex-col h-screen w-screen'>
            <div>
                <NavigationBar />
            </div>
            <div className='flex-col w-[19rem] mt-0.5 ml-0 bg-green-200 shadow-sm'>
                <LiveBroadcastList />
            </div>
        </div>
    );
};

export default Home;