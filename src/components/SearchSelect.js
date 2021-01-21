import { useState } from 'react'

const SearchSelect = () => {
    return (
        <>
            <label for="searchBy">Search by:</label>
            <select name="searchBy" id="searchBy">
            <option value="All">All</option>
            <option value="Author">Author</option>
            <option value="Date">Date</option>
            </select>
        </>
    )
}

export default SearchSelect
