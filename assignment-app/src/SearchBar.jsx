import React, {useState} from "react";

export default function SearchBar ({keyword, setKeyword}) {

    return (
        <div>
            <div className="mb-2">
                <input 
                className="w-25 form-control" 
                type="search" 
                placeholder="Search by keyword" 
                />
            </div>
            <div className="w-25">
                <button className="btn btn-light w-100 form-control">Search</button>
            </div>
        </div>
    ); 
}