import React from 'react'

const CommentBox = ({data}) => {
  return (
    <div className='flex'>
    <div>
        <div className='rounded-full h-12 w-12 flex justify-center border-black border items-center'>S</div>
    </div>
    <div>
        <p className='font-bold'>Sanjeev Singh</p>
        <p>Lorem </p>
    </div>
    </div>
  )
}

export default CommentBox