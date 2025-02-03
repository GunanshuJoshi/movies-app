import React from 'react'

const Search = ({searchTerm , setsearchTerm}) => {
    const handleSearchTerm = (e) => {
        setsearchTerm(e.target.value)
    }
  return (
    <div className='search'>
        <div>
        <img src="./Search-Input.png" alt=""  />
        <input type="text" value={searchTerm} placeholder='Start searching...' onChange={handleSearchTerm} />
        </div>
    </div>
  )
}

export default Search