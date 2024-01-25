

interface Authprop {
    children:React.ReactNode;
}

const Authlayout = ({children}: Authprop) => {
  return (
    <div>
        <h2>Inner layout</h2>
        {children}
    </div>
  )
}

export default Authlayout;