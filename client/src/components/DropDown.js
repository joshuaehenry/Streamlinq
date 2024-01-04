import { React, useState } from 'react';
import DownCaret from '../images/arrow.png';

const DropDown = ({ options }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-slate-50 flex flex-col">
            <div className="flex flex-row">
                <div>
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="bg-indigo-300">Account
                    </button>
                </div>
                <div class="items-center bg-indigo-300 pt-1.5 pl-0.5">
                    <img src={DownCaret} alt="" className="h-4 w-3"/>
                </div>
            </div>
            { isExpanded && options &&
                <div className>
                    <ul className="absolute border p-2 bg-white">
                        {options.map(option => {
                            return (
                                <li key={option} className="bg-white pl-1 relative hover:bg-slate-50">
                                    <a href="#">{option}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
            {console.log(options)}
        </div>
    );
};

export default DropDown;