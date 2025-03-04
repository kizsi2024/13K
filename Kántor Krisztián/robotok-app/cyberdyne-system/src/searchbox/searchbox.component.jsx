import React from "react"
const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input className="pa3 ba b--green bg-lightet-blue" type="search" placeholder="keresés" onChange={searchChange} />
        </div>
    )
}

export default SearchBox