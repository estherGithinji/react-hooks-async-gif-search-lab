import React from "react";

function GifSearch() {
    return (
       
            <div className="container-fluid">
            <form className="d-flex" role="search">
                <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
         
    )
}

export default GifSearch;