import "./index.css";
import CardList from "./CardList";
//import shuffle from 'lodash/shuffle';

export type memoType={
  id:number;
  img:string;
}


  const memoObj:memoType[]= [{id:1,
    img:"https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
   },
   {id:2,
    img:"https://images.unsplash.com/photo-1546842931-886c185b4c8c",
   },
   {id:3,
    img:"https://images.unsplash.com/photo-1520763185298-1b434c919102",
   },
   {id:4,
    img:"https://images.unsplash.com/photo-1442458017215-285b83f65851",
   },]
   

function App() {
  return <div className="flex justify-center grid  pt-20 ">
    <div className="grid grid-flow-col grid-rows-2  gap-10">
    <CardList memoObj={memoObj}/>
    </div>
  </div>;
}

export default App;
