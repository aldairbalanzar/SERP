import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

function SearchBar({ jsonData, search, setSearch, filteredData, handleSearchedData }) {
    const history = useHistory();
    const location = useLocation();
    const [inputMessage, setInputMessage] = useState('search')

    const handleChanges = e => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(search.length > 0) {
            history.push(`/search?q=${search}`);
            setInputMessage('Search');
        } else {
            setInputMessage('Please provide something to search for...');
            return
        }
        handleSearchedData(jsonData, search);
        setSearch('');
    };

    return (
        <form className='form-search' onSubmit={handleSubmit}>
            <input type='text' className='searchbar' 
            onChange={handleChanges} 
            value={search}
            placeholder={inputMessage}
            />
            <button type='submit' className='submit-btn'>Submit</button>
            {filteredData.length > 0  &&
                <h3 className="search-results-count">{`Results: ${filteredData.length}`}</h3>
            }
            {filteredData.length < 1 && location.search.slice(3).length > 0 &&
                <h3 className="search-results-count-none">{`No results found for '${location.search.slice(3)}'`}</h3>
            }
        </form>
    )
}

export default SearchBar
