import React from 'react'

const Search = ({search, setSearch}) => {
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return <input value={search} onChange={handleSearch} />
}

export default Search