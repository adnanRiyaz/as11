import React, { useState } from 'react'
import axios from 'axios'
import './container.css'
export default function Container() {
    async function newChar(){
        const num = Math.ceil(Math.random()*88);
        console.log(num)
        const res = await axios.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${num}.json`);
        // products= 'hi'
        console.log(res.data)
        // console.log(res.data)
        setData({name:res.data.name,height:res.data.height,image:res.data.image})
      }
  const [data,setData] = useState({name:null,age:"",color:"",height:"",image:""})
  return (
    <div className='main-container'>
     {
        data.name === null ? <button onClick={newChar}>Generate</button>:
        <>
        <img src={data.image} alt="" width="280"height="150"/>
        <h1>{data.name}</h1>
        <h3>{data.height} cm</h3>
        <button onClick={newChar}>Generate</button>
        </>
     }
        {/* <img src={data.image} alt="" width="280"height="150"/>
        <h1>{data.name}</h1>
        <h3>{data.height} cm</h3>
        <button onClick={newChar}>Generate</button> */}
    </div>
  )
}
