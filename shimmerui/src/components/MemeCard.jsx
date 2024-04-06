import React from 'react'
import Shimmer from './Shimmer';

const MemeCard = ({data}) => {
    //console.log(data);
    const {url,title,author}=data;
  return (
    <div className='p-5 m-5 border border-black rounded-md '>
   
      <img
      className='w-64 bg-cover h-64 '
      alt='meme'
      src={url}
      />
      <p>{author}</p>
    </div>
  )
}

export default MemeCard