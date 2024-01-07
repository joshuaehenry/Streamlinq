import React from 'react';
import DropDown from './DropDown';

const NavigationBar = () => {
    return (
        <div className='bg-green-400'>
        <div className='flex flex-row p-3 justify-between'>
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
            <div className='flex'>
                <DropDown options={[
                    'Linked Accounts',
                    'Settings',
                    'Logout'
                ]} dropdownName={'Account'}/>
            </div>
        </div>
        </div>
    );
};

/* 
<div className='grid grid-cols-1 divide-y'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
*/
export default NavigationBar;