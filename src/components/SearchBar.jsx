import { useSearchContext } from "../context/SearchContext";

export default function SearchBar() {
    const { search, setSearch } = useSearchContext();

    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <p>Searching for: {search}</p>
        </div>
    );
}