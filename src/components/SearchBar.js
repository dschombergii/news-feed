import { useState } from "react";
import './Search.css'

export const SearchBar = ( {passStateUp}) => {
    
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        passStateUp({value})
        // alert("You searched for: " + value);
        setValue('')
    }
    
    return (
        <form className="Search-component" onSubmit={handleSubmit}>
            <label className="sr-only">
                Search
            </label>
            <input required className="Search-field" type="text" value={value} onChange={handleChange} />
        </form>
    )
}

export default SearchBar
