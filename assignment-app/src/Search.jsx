import React, {useState} from "react";
import SearchBar from "./SearchBar.jsx";

export default function Search() {
    const filterTypeOptions = ["gender", "operatingSystem", "model", "behaviorClass"];
    const [filterType, selectedFilter] = useState(filterTypeOptions[0]);
    const [searchKeyword, selectedKeyword] = useState("");

    const resultSearch = (event) => {event.preventDefault();}
    
    return (
        <form onSubmit={resultSearch}>
        <div className="container d-flex flex-column gap-3">
            <div>
                <label className="form-label">Select data point to filter search by</label>
                <select className="form-select w-auto" 
                value={filterType} 
                onChange={(event) => selectedFilter(event.target.value)}
                >
                {filterTypeOptions.map(option => (<option key={option} value={option}>{option}</option>))}
                </select>
            </div>
            <div>
                <SearchBar 
                keyword={searchKeyword}
                setKeyword={selectedKeyword}
                />
            </div>
        </div>
        </form>
    );
}