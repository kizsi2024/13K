import React from 'react'

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa3'>
            <input className='pa3 ba b--green bg-lightest-blue'
            
            type='search'
            placeholder='Keresés'
            onChange={searchChange}

            />
        </div>
    )
}

export default SearchBox