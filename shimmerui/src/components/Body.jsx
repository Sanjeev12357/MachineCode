import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';


const Body = () => {
    const [memes, setMemes]=useState([]);
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        fetcMemes();
        window.addEventListener('scroll',handleScroll);
 
      return()=> window.removeEventListener('scroll',handleScroll);
    
    },[])
    const handleScroll=()=>{
        if(Math.round(window.scrollY + window.innerHeight) >= document.body.scrollHeight){
            console.log("end of page")
        }
        fetcMemes();
    }

    const fetcMemes=async()=>{
        setLoading(true);
        const data= await fetch("https://meme-api.com/gimme/20");
        const json= await data.json();
      //  console.log(json);
        setLoading(false);
        setMemes((memes)=>[...memes,...json.memes]);

    }
  return (
    <div className='flex flex-wrap'>
   
        {( memes.map((meme,index)=>{
            return(
                <div  key={index}>
                
                   <MemeCard data={meme}/>
                </div>
            )
        }))}
        {loading && <Shimmer/>}
    </div>
  )
}

export default Body