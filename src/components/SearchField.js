import axios from 'axios'
import React, {useState} from 'react'
import Gif from './Gif'

const SearchField = (props) => {

    const [keyword,setKeyword] = useState('')

    const searchGif = () =>{
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=9oAAgv5PsztE1QPOPVuCqoSCnOEjdwQe`).then(
            (response) =>{
            props.setData(response.data)
            }
        )
    }

    const searchTrendingGif = () =>{
        console.log('fetched trending')
        axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=9oAAgv5PsztE1QPOPVuCqoSCnOEjdwQe`).then(
            (response) =>{
            props.setData(response.data)
            }
        )
    }

    const randomGif = () =>{
        axios.get(`http://api.giphy.com/v1/gifs/random?api_key=9oAAgv5PsztE1QPOPVuCqoSCnOEjdwQe`).then(
            (response) =>{
            props.setData(response.data)
            }
        )
    }

    function getKeyword(e) {
        setKeyword(e.target.value)
    }

     return(
        <>
        <div>
        <h1>{keyword}</h1>
        <input onChange={getKeyword} type="text" placeholder="Search.."></input>
        <button onClick={searchGif}>Search Gif</button>
        <button onClick={searchTrendingGif}>Trending</button>
        <button onClick={randomGif}>Random</button>
        </div>
        </>

     )
 }

 export default SearchField
