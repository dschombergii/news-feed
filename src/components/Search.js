import  SearchSelect from "./SearchSelect";
import SearchBar from "./SearchBar";
import { SearchSubmit } from "./SearchSubmit"
import './Search.css'

const Search = () => {

    const passStateUp = (state) => {
        console.log({state})
    }
    const passSearchSelectUp = (state) => {
        console.log({state})
    }

    return (
        <div className="Search">
            <SearchSelect passSearchSelectUp={passSearchSelectUp} />
            <SearchBar passStateUp={passStateUp} />
            <SearchSubmit />
        </div>
    )
}

export default Search
