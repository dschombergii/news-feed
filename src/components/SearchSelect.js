import { useState } from 'react'
import './Search.css'


const SearchSelect = ({ select, handleSubmit, handleChange }) => {
    return (
        <div className="Search-component">
            <label htmlFor="searchBy">Search by:</label>
            <select select={select} style={{ outline: "none" }} onChange={handleChange} name="searchBy" id="searchBy">
                <option value="All">All</option>
                <option value="Author">Author</option>
                <option value="Date">Date</option>
            </select>
        </div>
    )
}

export default SearchSelect
