import React from 'react';
import Filters from './Filters';
import { useHistory } from 'react-router';

function Reset({ handleSearchedData, jsonData }) {
    const history = useHistory();

    const handleReset = (data, search) => {
        handleSearchedData(data, search);
        history.push('/');
    };

    return (
        <div className='reset-container'>
            <button className="reset-btn" onClick={() => {handleReset(jsonData, '')}}>Reset to all videos</button>
        </div>
    )
}

export default Reset
