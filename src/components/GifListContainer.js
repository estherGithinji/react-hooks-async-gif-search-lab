import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifList, setGifList] = useState([])
    console.log(gifList);

    useEffect(() => {
         fetch("https://api.giphy.com/v1/gifs/search?api_key=Hdyk4y8TLduTtLOk5uzhNQ93HBpHUrcd&q=gif&limit=25&offset=0&rating=g&lang=en")
         .then(response => response.json())
         .then(data => {
            //show just 3 gifs
            const gifArray = data.data.slice(0,3)
            setGifList(gifArray)
         })
    }, []);

    return (
        <div className="gif-list-container">
             <GifList gifs={gifList}/>
        </div>
    )
}

export default GifListContainer;