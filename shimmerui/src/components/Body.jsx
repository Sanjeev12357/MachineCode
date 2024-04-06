import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';


const Body = () => {
    const [memes, setMemes]=useState(null);

    useEffect(()=>{
        fetcMemes();
    
    },[])

    const fetcMemes=async()=>{
        const data= await fetch("https://meme-api.com/gimme/20");
        const json= await data.json();
      //  console.log(json);
        setMemes(json.memes);

    }
  return (
    <div className='flex flex-wrap'>
   
        {!memes ? <Shimmer/> :( memes.map((meme,index)=>{
            return(
                <div  key={index}>
                
                   <MemeCard data={meme}/>
                </div>
            )
        }))}
    </div>
  )
}

export default Body