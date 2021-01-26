import React from 'react';
import Reset from './Reset';

function Filters({ sort, setSort, handleSearchedData, jsonData, isNavOpen, setIsNavOpen }) {

    const handleSort = (num) => {
        setSort(num);
    };

    const handleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <div className={`nav ${isNavOpen ? 'filter-navigator-open' : 'filter-navigator-closed'}`}>
            <div className={`${isNavOpen ? 'icon-container-open' : 'icon-container-closed'}`}>
                <i 
                className={`hamburger-times ${isNavOpen ? 'fas fa-times' : 'fas fa-bars'}`}
                onClick={handleNav}
                > 
                </i>
                {isNavOpen
                ?
                <form className='form-filter'>
                    <label className='sort-input' htmlFor="alphabetical-sort">
                        Alphabetical:
                        <input type="checkbox" checked={sort === 0 ? true : false} onChange={() => handleSort(0)}/>
                    </label>
                    <label className='sort-input' htmlFor="most-viewed-sort">
                        Most viewed:
                        <input type="checkbox" checked={sort === 1 ? true : false} onChange={() => handleSort(1)}/>
                    </label>
                    <label className='sort-input'  htmlFor="date-sort">
                        Newest: 
                        <input type="checkbox" checked={sort === 2 ? true : false} onChange={() => handleSort(2)}/>
                    </label>
                    <label className='sort-input'  htmlFor="date-sort">
                        Oldest: 
                        <input type="checkbox" checked={sort === 3 ? true : false} onChange={() => handleSort(3)}/>
                    </label>
                    <Reset handleSearchedData={handleSearchedData} jsonData={jsonData}/>
                </form> 
                : null
                }
            </div>
        </div>
    )
}

export default Filters
