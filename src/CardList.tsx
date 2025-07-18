import Card from "./Card";
import type { memoType } from "./App";
import { useEffect, useState } from "react";

export type memoList = {
  memoObj: memoType[];
  setMemoObject: React.Dispatch<React.SetStateAction<memoType[]>>;
};

export default function CardList({ memoObj, setMemoObject }: memoList) {
  const [selected, setSelected] = useState<memoType[]>([]);

  const handleClick = (card: memoType) => {
    if (selected.length >= 2 || !card.hidden) return;
    setMemoObject((memo) =>
      memo.map((m) => (m.id === card.id ? { ...m, hidden: false } : m))
    );
    setSelected((memo) => [...memo, card]);
  };

  useEffect(() => {
    if (selected.length === 2) {
      const [first, second] = selected;
      if (first.imgid !== second.imgid) {
        setMemoObject((memo) =>
          memo.map((m) =>
            m.id === first.id || m.id === second.id ? { ...m, hidden: true } : m
          )
        );
      }

      setSelected([]);
    }
  },[]);

  return (
    <>
      {memoObj.map((memo: memoType) => (
        <Card
          key={memo.id}
          image={memo.img}
          hidden={memo.hidden}
          handleClick={() => handleClick(memo)}
        />
      ))}
    </>
  );
}
