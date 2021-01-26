import React from 'react'

function Filters({sort, setSort}) {

    const handleSort = (num) => {
        setSort(num);
    };

    return (
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
        </form>
    )
}

export default Filters
