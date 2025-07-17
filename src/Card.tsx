
export default function Card({image}:{image:string}) {
  console.log(image)
  return (
    <div className='p-20 bg-gray-500 cursor-pointer relative'>
      <img src={image} className=" absolute inset-0 w-full h-full object-cover hidden"/>
    </div>
  )
}
