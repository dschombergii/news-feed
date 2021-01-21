import { useState } from "react";
import './Search.css'

export const SearchBar = ({ value, setValue, handleSubmit, handleChange }) => {
    
    
    
    return (
        <>
            <label className="sr-only">
                Search
            </label>
            <input name="inputField" required className="Search-field" type="text" value={value} onChange={handleChange} />
        </>
    )
}

export default SearchBar
