import axios from 'axios'
import React, {useState} from 'react'
import Gif from './Gif'

const SearchField = ({data,setData}) => {

    const [keyword,setKeyword] = useState('')

    const searchGif = () =>{
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=9oAAgv5PsztE1QPOPVuCqoSCnOEjdwQe`).then(
            (response) =>{
            setData(response.data)
            }
        )
    }

    function getKeyword(e) {
        setKeyword(e.target.value)
    }
    
    console.log(data)

     return(
        <>
        <h1>{keyword}</h1>
        <input onChange={getKeyword} type="text" placeholder="Search.."></input>
        <button onClick={searchGif}>Search Gif</button>
        </>
     )
 }

 export default SearchField
