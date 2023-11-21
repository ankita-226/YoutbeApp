import store from "../utils/store"
import {useEffect, useState} from "react"

import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from "../utils/constant"
import { cacheResults } from "../utils/SearchSlice"
const Head = () => {
   const [searchQuery, setSearchQuery] = useState("")
   const [Suggestions, setSuggestions] = useState([])

   const [showSuggestions, setShowSugestions] = useState(false)
 
const searchCache = useSelector((store)=>store.search)
const dispatch = useDispatch()
  useEffect(()=>{
//make an api call after every key press
//but if the difference between 2 Api calls is <200ms
//decline api call
console.log(searchQuery)
const timer = setTimeout(()=>
 {
   if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery])
   }
   else{
      getSearchSuggestions()
   }
   
   } ,200)
return() =>{
   clearTimeout(timer)
}
  },[searchQuery])


  const getSearchSuggestions = async()=>{
   const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
   const json = await data.json()
   setSuggestions(json[1])

   dispatch(cacheResults({
      [searchQuery]:json[1],
   }))
  }
   
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
       <div>
       <input
        className="w-1/2 border border-gray-400 p-2 rounded-l-full ml-10"
        type="text" placeholder="Search..."
        value={searchQuery}
        onChange ={(e)=>setSearchQuery(e.target.value)}
        onFocus={() =>setShowSugestions(true)}
        onBlur={()=>setShowSugestions(false)} />
     
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">🔍 </button>
       </div>
       {showSuggestions && (
         <div className="fixed bg-white py-2 px-5 ml-3 w-[37rem] shadow-lg rounded-lg">
         <ul>
            {Suggestions.map(s=><li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>)}
            
         </ul>
       </div>
       )}
       
       
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