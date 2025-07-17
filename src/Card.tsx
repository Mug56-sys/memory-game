import { useState } from "react"

export default function Card({image}:{image:string}) {
  const [isHidden,setIsHidden]=useState(true)
  console.log(isHidden)
  return (
    <div className='p-20 bg-gray-500 cursor-pointer relative' onClick={()=>setIsHidden(!isHidden)}>
      <img src={image} className={`absolute inset-0 w-full h-full object-cover ${isHidden ? `hidden`:null}`}/>
    </div>
  )
}
