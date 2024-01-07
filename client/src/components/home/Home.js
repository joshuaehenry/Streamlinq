import React from 'react';
import NavigationBar from '../menu/NavigationBar';
import LiveBroadcastList from '../broadcast/LiveBroadcasts';

const Home = () => {
    return (
        <div className='flex-col'>
            <div>
                <NavigationBar />
            </div>
            <div className='flex-col w-1/4 m-2 bg-green-200 shadow-sm pl-1'>
                <LiveBroadcastList />
            </div>
        </div>
    );
};

export default Home;