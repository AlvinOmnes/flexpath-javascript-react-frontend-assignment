import React, {useState} from "react";

export default function SearchBar ({keyword, setKeyword}) {

    return (
        <div>
            <div className="mb-2">
                <input 
                className="w-25 form-control" 
                type="search" 
                placeholder="Search by keyword"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)} 
                />
            </div>
           
        </div>
    ); 
}