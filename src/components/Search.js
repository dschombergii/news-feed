import { useState } from 'react'

import  SearchSelect from "./SearchSelect";
import SearchBar from "./SearchBar";
import { SearchSubmit } from "./SearchSubmit"
import './Search.css'

const Search = () => {
    const [value, setValue] = useState('')
    const [select, setSelect] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSelectChange = (e) => {
        setSelect(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        passStateUp({value, select})
        // alert("You searched for: " + value);
        setValue('')
    }

    const passStateUp = (state) => {
        console.log({state})
    }
    // const passSearchSelectUp = (state) => {
    //     console.log({state})
    // }

    return (
        <form className="Search-component" onSubmit={handleSubmit}>
        <div className="Search">
            <SearchSelect value={value} handleSubmit={handleSubmit} handleChange={handleSelectChange} />
            <SearchBar select={select}  handleSubmit={handleSubmit} handleChange={handleChange}/>
            <SearchSubmit />
        </div>
        </form>
    )
}

export default Search
