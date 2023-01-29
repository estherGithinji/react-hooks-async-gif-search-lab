import React from "react";

function GifList({Image}) {
    return (
        <div>
            <h1>Gif List</h1>
            <ul>
                {Image}
            </ul>
        </div>
    )
}

export default GifList;