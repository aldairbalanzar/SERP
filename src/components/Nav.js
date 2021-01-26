import React from 'react';
import { useHistory } from 'react-router';

function Nav({ handleSearchedData, jsonData }) {
    const history = useHistory();

    const handleReset = (data, search) => {
        handleSearchedData(data, search);
        history.push('/');
    };

    return (
        <div className='navigator'>
            <ul className="links-container">
                <li className="link" onClick={() => {handleReset(jsonData, '')}}>Reset to all videos</li>
            </ul>
        </div>
    )
}

export default Nav
