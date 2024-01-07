import { React, useState } from 'react';
import DownCaret from '../../images/arrow.png';

const DropDown = ({ options, dropdownName }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className='bg-green-400 flex flex-col'>
            <div className='flex flex-row'>
                <div>
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className='hover:underline'
                    >{dropdownName}
                    </button>
                </div>
                <div class='items-center pt-1.5 pl-0.5'>
                    <img src={DownCaret} alt='Caret' className='h-4 w-3'/>
                </div>
            </div>
            { isExpanded && options &&
                <div className>
                    <ul className='absolute border p-2 bg-white shadow-sm'>
                        {options.map(option => {
                            return (
                                <li key={option} className='bg-white pl-1 relative hover:bg-slate-50'>
                                    <a href='#'>{option}</a>
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