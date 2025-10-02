import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";

export default function Search() {
    const filterTypeOptions = ["gender", "operatingSystem", "model", "behaviorClass"];
    const [filterType, selectedFilter] = useState(filterTypeOptions[0]);
    const [searchKeyword, selectedKeyword] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] =useState(false);

    useEffect(() => {
        const savedFilter = localStorage.getItem("searchFilterType");
        const savedKeyword = localStorage.getItem("searchKeyword");
        const savedResults = localStorage.getItem("searchResults");

        if (savedFilter !== null && savedFilter !== undefined) {
            selectedFilter(savedFilter);
        }
        if (savedKeyword !== null && savedKeyword !== undefined) {
            selectedKeyword(savedKeyword);
        }
        if (savedResults !== null && savedResults !== undefined) {
            setResults(JSON.parse(savedResults));
        }
    }, []);

    const resultSearch = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            await new Promise ((resolve) => setTimeout(resolve, 1000));

            const response = await fetch(`/api/data/search`);
            const data = await response.json();
            const fieldMap = {
                gender: "Gender",
                operatingSystem: "Operating System",
                model: "Device Model",
                behaviorClass: "User Behavior Class",
            };
            const fieldToFilter = fieldMap[filterType];
            const filteredResults = data.filter((item) => item[fieldToFilter]?.toLowerCase().includes(searchKeyword.toLowerCase()));
            setResults(filteredResults);

            localStorage.setItem("searchFilterType", filterType);
            localStorage.setItem("searchKeyword", searchKeyword);
            localStorage.setItem("searchResults", JSON.stringify(filteredResults));
        }
        catch (error) { 
            console.error(error) 
        }
        finally {
            setLoading(false);
        }
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
                        {filterTypeOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                            ))}
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

                {loading && (
                    <div className="text">
                        Loading...
                    </div>
                )}

                {results.length === 0 ? (
                    <div className="text">
                        No Records to Display
                    </div>
                ) : (
                    <div className ="text">
                        Displaying {results.length} Records
                    </div>
                )}

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Device Model</th>
                            <th scope="col">Operating System</th>
                            <th scope="col">App Usage Time (min/day)</th>
                            <th scope="col">Screen On Time (hours/day)</th>
                            <th scope="col">Battery Drain (mAh/day)</th>
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
                                <td>{user["Device Model"]}</td>
                                <td>{user["Operating System"]}</td>
                                <td>{user["App Usage Time (min/day)"]}</td>
                                <td>{user["Screen On Time (hours/day)"]}</td>
                                <td>{user["Battery Drain (mAh/day)"]}</td>
                                <td>{user["Number of Apps Installed"]}</td>
                                <td>{user["Data Usage (MB/day)"]}</td>
                                <td>{user["Age"]}</td>
                                <td>{user["Gender"]}</td>
                                <td>{user["User Behavior Class"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

{/*                 {results.length > 0 && (
                    <div>
                        {results.map((item, idx) =>
                            <tbody key={idx} className="">
                                {JSON.stringify(item)}
                            </tbody>
                        )}
                    </div>
                )} */}
            </div>
        </form>
    );
}