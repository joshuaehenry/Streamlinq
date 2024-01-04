import React from 'react';
import DropDown from './DropDown';

const NavigationBar = () => {
    return (
        <div className="bg-indigo-300">
        <div className="flex flex-row p-5 justify-between">
            <div className="flex flex-row space-x-4">
                <div>
                    <button className="font-semibold">Streamlinq</button>
                </div>
                <div>
                    <button className="hover:underline">Following</button>
                </div>
                <div>
                    <button className="hover:underline">Discover</button>
                </div>
                <DropDown options={[
                    "Linked Accounts",
                    "Settings",
                    "Logout"
                ]}/>
            </div>
            <div className="flex">
                <button className="hover:bg-indigo-300">Log Out</button>
            </div>
        </div>
        </div>
    );
};

/* 
<div className="grid grid-cols-1 divide-y">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
*/
export default NavigationBar;