import axios from 'axios'
import React, {useState} from 'react'

const SearchField = () => {

    const [keyword,setKeyword] = useState(0)

    const searchGif = () =>{
        console.log(keyword)
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=9oAAgv5PsztE1QPOPVuCqoSCnOEjdwQe`).then(
            (response) =>{
            console.log(response.data.data[0].images.original.url)
            }
        )
    }

    function getKeyword(e) {
        setKeyword(e.target.value)
        console.log(e.target.value)
    }

     return(
        <>
        <h1>{keyword}</h1>
        <input onChange={getKeyword} type="text" placeholder="Search.."></input>
        <button onClick={searchGif}>Search Gif</button>
        </>
     )
 }

 export default SearchField
