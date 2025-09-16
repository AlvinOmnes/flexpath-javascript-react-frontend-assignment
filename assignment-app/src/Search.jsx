import React, { useState } from "react";
import SearchBar from "./SearchBar.jsx";

export default function Search() {
    const filterTypeOptions = ["gender", "operatingSystem", "model", "behaviorClass"];
    const [filterType, selectedFilter] = useState(filterTypeOptions[0]);
    const [searchKeyword, selectedKeyword] = useState("");
    const [results, setResults] = useState([]);

    const resultSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/data/search`);
            const data = await response.json();
            setResults(data);
        }
        catch (error) { console.error(error) };
    };

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
                <div className="w-25">
                    <button className="btn btn-light w-100 form-control">Search</button>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Device Model</th>
                            <th scope="col">Operating System</th>
                            <th scope="col">App Usage Time (min/day)</th>
                            <th scope="col">Screen On Time (hours/day)</th>
                            <th scope="col"> Battery Drain (mAh/day)</th>
                            <th scope="col">Number of Apps Installed</th>
                            <th scope="col">Data Usage (MB/day)</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">User Behavior Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((user,index) => (
                            <tr key={index}>
                                <td>{user["User ID"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {results.length > 0 && (
                    <div>
                        {results.map((item, idx) =>
                            <tbody key={idx} className="">
                                {JSON.stringify(item)}
                            </tbody>
                        )}
                    </div>
                )}
            </div>
        </form>
    );
}