import React, { useEffect } from 'react'
import SearchField from './SearchField'
import './Gif.css'


export default function Gif(props) {
    return (
        <div className='gifs'>
            {props.data && Array.isArray(props.data) && props.data.map(item => {
                return <img className='multi' src= {item.images.original.url}/>
            })}
            {props.data && !Array.isArray(props.data) && <img className='single' src= {props.data.images.original.url}/> }
        </div>
    )
}
