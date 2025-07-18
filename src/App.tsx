import "./index.css";
import shuffle from "./assets/utilities/randomizer";
import CardList from "./CardList";
import { useEffect, useState } from "react";
//import shuffle from 'lodash/shuffle';

export type memoType={
  id:number;
  imgid:number;
  img:string;
  hidden:boolean;
}


  const memoObj:memoType[]= [{id:1,
    imgid:1,
    img:"https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
    hidden:true
   },
   {id:2,
    imgid:2,
    img:"https://images.unsplash.com/photo-1546842931-886c185b4c8c",
    hidden:true
   },
   {id:3,
    imgid:3,
    img:"https://images.unsplash.com/photo-1520763185298-1b434c919102",
    hidden:true
   },
   {id:4,
    imgid:4,
    img:"https://images.unsplash.com/photo-1442458017215-285b83f65851",
    hidden:true
   },{id:5,
    imgid:1,
    img:"https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
    hidden:true
   },
   {id:6,
    imgid:2,
    img:"https://images.unsplash.com/photo-1546842931-886c185b4c8c",
    hidden:true
   },
   {id:7,
    imgid:3,
    img:"https://images.unsplash.com/photo-1520763185298-1b434c919102",
    hidden:true
   },
   {id:8,
    imgid:4,
    img:"https://images.unsplash.com/photo-1442458017215-285b83f65851",
    hidden:true
   }]
   

function App() {
  const [memoObject,setMemoObject]=useState<memoType[]>([])

  useEffect(()=>{
    const shuffled=shuffle([...memoObj]);
    setMemoObject(shuffled)
  },[])

  return <div className="flex justify-center grid  pt-20 ">
    <div className="grid grid-flow-col grid-rows-2  gap-10">
    <CardList  memoObj={memoObject} setMemoObject={setMemoObject}/>
    </div>
  </div>;
}

export default App;
