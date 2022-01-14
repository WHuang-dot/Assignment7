import axios from 'axios'
import React, {useState} from 'react'
import Gif from './Gif'
import './SearchField.css'

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
        <div className='search'>
        <h1>GIPHY-APP</h1>
        <input onChange={getKeyword} type="text" placeholder="Search.."></input>
        <button onClick={searchGif}>Search Gif</button>
        <br></br>
        <button onClick={searchTrendingGif}>Trending</button>
        <button onClick={randomGif}>Random</button>
        </div>
        </>

     )
 }

 export default SearchField
