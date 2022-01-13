import logo from './logo.svg';
import { useState } from 'react';
import SearchField from './SearchField';
import Gif from './Gif';

 function App(){

  const [gif,setGif] = useState([])

  return (
    <>
    <div>
      <p>hi</p>
    </div>
    <SearchField data = {gif.data} setData = {setGif}/>
    <Gif data = {gif.data} setData = {setGif}/>
    </>
  )
}

export default App;
