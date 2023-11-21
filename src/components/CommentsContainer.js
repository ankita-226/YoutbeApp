import React from 'react'


const commentsData = [
    {
        name:"Ankita",
        text:"beautiful song i like it",
        replies:[
            {
                name:"Ankita",
                text:"beautiful song i like it",
                replies:[
                    {
                        name:"Ankita",
                        text:"beautiful song i like it",
                        replies:[
                            
                        ]
                    },
                ]
            },
        ]
    },
    {
        name:"Ankita",
        text:"sjdgdhc",
        replies:[
            {
            name:"Ankita",
            text:"sjdgdhc",
            replies:[
    
            ]
        },
            {
            name:"Ankita",
            text:"sjdgdhc",
            replies:[
    
            ]
        },
    ]
    },
    {
        name:"Ankita",
        text:"sjdgdhc",
        replies:[

        ]
    },
]
const Comment = ({data}) =>{
    const {name, text, replies} = data;
return(
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
 <img  className="w-8 h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCS3uMVc54NYJHXFUSIUFZrI3Zp00EZ6KcA&usqp=CAU" alt="user"/>
 <div className='px-3'>
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
 </div>

    </div>
)
}

const CommentsList = ({comments}) =>{
return comments.map((comment,index)=>(
    <div>
        <Comment data ={comment} key={index} />
        <div className='pl-5 ml-5 border border-l-black'>
        <CommentsList comments ={comment.replies} key={index}/>
        </div>
    </div>
)) 
 }


const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
     <h1 className='text-3xl font-bold'>Comments</h1>
     <CommentsList comments ={commentsData}/>


    </div>
  )
}

export default CommentsContainer