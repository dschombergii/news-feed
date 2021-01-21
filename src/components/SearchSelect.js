import { useState } from 'react'
import './Search.css'


const SearchSelect = () => {
    return (
        <div className="Search-component">
            <label for="searchBy">Search by:</label>
            <select name="searchBy" id="searchBy">
            <option value="All">All</option>
            <option value="Author">Author</option>
            <option value="Date">Date</option>
            </select>
        </div>
    )
}

export default SearchSelect
