

const Card = ({children}: {children:React.ReactNode}) => {
    
  return (
    <div className=" flex justify-center items-center m-10 shadow-lg border-blue-400 border-2 p-[100px]"
    >{children}</div>
  )
}

export default Card;