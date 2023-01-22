import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gif, setGif] = useState([])

    useEffect(() => {
         fetch(" http://localhost:3000/data")
         .then(response => response.json())
         .then(data => setGif(data))
    }, []);

    return (
        <div className="gif-list-container">
            <GifSearch/>
            <GifList/>
        </div>
    )
}

export default GifListContainer;