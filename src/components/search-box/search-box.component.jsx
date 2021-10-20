import React from 'react'

const SearchBox = ({ onChange }) => {
    return (
        <input
            type="search"
            placeholder="enter any text"
            onChange={onChange}
        />
    )
}

export default SearchBox;