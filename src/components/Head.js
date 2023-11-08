import React from 'react'
import {useDispatch} from "react-redux"
import { toggleMenu } from '../utils/appSlice'
const Head = () => {
const dispatch = useDispatch()
   const toggleMenuHandler = () =>{
      dispatch(toggleMenu())
   }
 return (
   <div className="grid grid-flow-col p-5 shadow-lg">
 <div className="flex col-span-1">
    <img 
   onClick = {() => toggleMenuHandler()}
    className="h-12 cursor-pointer"
    alt="hamburger menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3K-5U573r_J10LPsRSBG8HNzpL8l-tPa2L6kSnOsdLO3yQ66c4R22wXFGFp0LtXEIluM&usqp=CAU"/>
    <img 
    className="h-12 w-[100px] ml-2"
    alt=" youtube-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMREE4IMAg92cKiVS4ZR8ncwqyysWuV4RiA&usqp=CAU"/>

     </div>

     <div className="col-span-10  p-3">
        <input
        className="w-1/2 border border-gray-400 p-2 rounded-l-full ml-10"
        type="text" placeholder="Search..."/>
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">🔍 </button>
     </div>
     <div className="col-span-1">
        <img
        className="h-8"
        alt="user-name" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCS3uMVc54NYJHXFUSIUFZrI3Zp00EZ6KcA&usqp=CAU"/>
     </div>

   </div>
  )
}

export default Head