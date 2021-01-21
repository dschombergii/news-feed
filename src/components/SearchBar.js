import { useState } from "react";

export const SearchBar = () => {
    
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("You searched for: " + value);
        // after doing something with the data, we reset the form value to empty quotes again
        setValue('')
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label className="sr-only">
                Search
            </label>
                {/* the value of the input is tied to this.state.value, so when a user types, the handleChange method changes this.state.value to match*/}
                <input required className="Search-field" type="text" value={value} onChange={handleChange} />
            <input className="Search-submit-btn" type="submit" value="Search" />
        </form>
    )
}

export default SearchBar
