import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  console.log(searchParams.get("v"))


  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div className=" ml-14 px-5 mt-10 ">
      <iframe width="900" height="500" 
      className="rounded-xl"
      src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        
      </iframe>


    </div>
  )
}

export default WatchPage