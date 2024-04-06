import React from 'react'

const CommentBox = ({data}) => {
  return (
    <div>
    {data.map((comment,index)=>{
        return(
            <div key={index} className='border-l-2 border-black px-4 py-2 my-2'>
                <p>{comment.username}</p>
                <p>{comment.comment}</p>
                {comment.replies && <CommentBox data={comment.replies}/>}
            </div>
        )
    })}
    </div>
  )
}

export default CommentBox