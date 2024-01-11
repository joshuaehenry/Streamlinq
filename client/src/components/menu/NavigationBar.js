import React from 'react';
import DropDown from './DropDown';

const NavigationBar = () => {
    return (
        <div className=' bg-gradient-to-b from-green-400 to-green-200'>
        <div className='flex flex-row p-4 justify-between'>
            <div className='flex flex-row space-x-4'>
                <div>
                    <button className='font-semibold text-lg'>Streamlinq</button>
                </div>
                <div>
                    <button className='hover:underline'>Following</button>
                </div>
                <div>
                    <button className='hover:underline'>Discover</button>
                </div>
                <DropDown options={[
                    'About',
                    'Contact',
                    'Help',
                ]} dropdownName={'General'}/>
            </div>
            <DropDown options={[
                'Linked Accounts',
                'Settings',
                'Logout'
            ]} dropdownName={'Account'}/>

        </div>
        </div>
    );
};

export default NavigationBar;