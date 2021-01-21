import { useState } from 'react'

import SearchSelect from "./SearchSelect";
import SearchBar from "./SearchBar";
import { SearchSubmit } from "./SearchSubmit"
import './Search.css'

const Search = ({ searchAll, searchAuthor, searchDate }) => {
    const [value, setValue] = useState('')
    const [select, setSelect] = useState('All')
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSelectChange = (e) => {
        setSelect(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        { select === 'Author' && searchAuthor({ value }) }
        { select === 'All' && searchAuthor({ value }) }
        { select === 'Date' && searchDate({ value }) }

        searchAll({ value })

        // alert("You searched for: " + value);
        setSearch(value)
        setValue('')
        setSelect('All')
    }

    return (
        <form className="Search-component" onSubmit={handleSubmit}>
            <div className="Search">
                <SearchSelect select={select} handleSubmit={handleSubmit} handleChange={handleSelectChange} />
                <SearchBar value={value} handleSubmit={handleSubmit} handleChange={handleChange} />
                <SearchSubmit />
            </div>
            {search === '' ? <span></span> : <span>{`showing results for "${search}":`}</span>}
        </form>
    )
}

export default Search
