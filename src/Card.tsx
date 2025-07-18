
export default function Card({
  image,hidden,handleClick
  
}: {
  image: string;
  hidden:boolean;
  handleClick:()=>void
  
}) {
  return (
    <div
      className="p-20 bg-gray-500 cursor-pointer relative hover:bg-cyan-200"
      onClick={handleClick}
    >
      {!hidden && (
        <img
          src={image}
          className={`absolute inset-0 w-full h-full object-cover `}
        />
      )}
    </div>
  );
}
