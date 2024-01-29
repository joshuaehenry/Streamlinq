import React from 'react';
import NavigationBar from '../menu/NavigationBar';
import LiveBroadcastList from '../broadcast/LiveBroadcasts';
import Login from '../login/Login';

const Home = () => {
    return (
        <div className='flex-col h-full w-full bg-green-100'>
            <div>
                <NavigationBar />
            </div>
            <div id='main-content' className='flex m-0.5'>
                <div className='w-[19rem] bg-green-200 shadow-sm'>
                    <LiveBroadcastList />
                </div>
                <div className='flex bg-green-100 grow justify-center mt-10'>
                    <Login />
                </div>
            </div>
            <div className='pt-11 pl-2 pr-2'>
                <footer className='text-xs flex justify-between'>
                    <p>Copyright 2023 Streamlinq</p>
                    <p>Developed by Joshua Henry</p>
                </footer>
            </div>
        </div>
    );
};

export default Home;