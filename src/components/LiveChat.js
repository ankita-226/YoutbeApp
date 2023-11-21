import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'

import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'


const LiveChat = () => {
    const[LiveMessage, setLiveMessage] = useState()
    const dispatch = useDispatch()
    const chatMessages=useSelector((store)=>store.chat.messages)
    useEffect(()=>{
        const i = setInterval(()=>{
//api polling
//console.log("Api polling")
dispatch(
    addMessage({
    name:generateRandomName(),
    message:makeRandomMessage(20)
}))

        },2000)
        return()=> clearInterval()

    },[])
  return (
    <>
    <div>
        <h2 className='font-bold text-2xl ml-5'>LiveChat</h2>
        <div className="bg-slate-100 rounded-lg w-full h-[500px] text-l ml-5  p-2 border border-black overflow-y-scroll  flex flex-col-reverse">
        
       {
        chatMessages.map((c,i)=>(
          <ChatMessage name={c.name} message={c.message} key={i}/>  
        ))
       }
       

    </div>

    </div>
    <form  onSubmit = {(e)=>{
        e.preventDefault();
        console.log("on submit",LiveMessage)
        dispatch(addMessage({
            name:"Ankita",
            message:LiveMessage,
        }))
        setLiveMessage("")
    }}className='w-full p-2 ml-3 my-2 border border-black shadow-lg'>
        <input type="text" placeholder='Type..' value={LiveMessage} onChange = {(e)=>{setLiveMessage(e.target.value)}}className='w-96  p-2'/>
        <button className='p-2 border border-black shadow-lg bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default LiveChat