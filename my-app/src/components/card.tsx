

const Card = ({children}: {children:React.ReactNode}) => {
    const cardstyle = {}
  return (
    <div className=" flex justify-center items-center m-10 shadow-md border-blue-400 border-2 p-[100px]"
    >{children}</div>
  )
}

export default Card;