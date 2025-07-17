import Card from "./Card"
import type { memoType } from "./App"; 

type memoList={
  memoObj:memoType[]
}

export default function CardList({memoObj}:memoList) {
  //const {id,img}=memoObj;
  return (
    <>
      {memoObj.map((memo:memoType)=>(
        <Card image={memo.img}/>
      ))}
    </>
  )
}
