import React from 'react'
import CommentBox from './CommentBox'
const data=[
    {
        username:"Sanjeev Singh",
        comment:"This is the first comment",
        replies:[
            {
                username:"Harkirat Singh",
                comment:"This is the first comment"
            }
        ]
    },
    {
        username:"Harkirat Singh",
        comment:"This is the first comment",
        replies:[
            {
                username:"Harkirat Singh",
                comment:"This is the first comment",
                replies:[
                    {
                        username:"Harkirat Singh",
                        comment:"This is the first comment",
                        replies:[
                            {
                                username:"Harkirat Singh",
                                comment:"This is the first comment"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        username:"Sanjeev Singh",
        comment:"This is the first comment"
    }
]

const Comments = () => {
  return (
    <div>
    <CommentBox data={data}/>
    </div>
  )
}

export default Comments