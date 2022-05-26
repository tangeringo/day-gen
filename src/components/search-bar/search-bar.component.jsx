import { SearchForm } from './search-bar-styles';

const Search_Bar = ({ ...searchInputProps }) => {
    return (
        <SearchForm {...searchInputProps}/>
    )
}

export default Search_Bar