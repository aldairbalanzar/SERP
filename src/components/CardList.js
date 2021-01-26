import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import Card from './Card';

function CardList({ jsonData, filteredData, handleSearchedData, currentSearch, setCurrentSearch }) {
    const location = useLocation();
    const [locationSearch, setLocationSearch] = useState(location.search.slice(3));

    useEffect(() => {
        handleSearchedData(jsonData, locationSearch);
        setCurrentSearch(locationSearch);
    }, [currentSearch, locationSearch]);

    return (
        <div className='card-list'>
        {filteredData.length > 0
        ? filteredData.map((video, i) => <Card key={i} video={video}/>)
        : jsonData.map((video, i) => <Card key={i} video={video}/>)
        }
        </div>
    )
}

export default CardList
