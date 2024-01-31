import Login from "./@login/page";


export default async function Layout({children, avatar, piece, login}:{
  children:React.ReactNode;
  avatar:React.ReactNode;
  piece:React.ReactNode;
  login:React.ReactNode;
  
})
 {
  const isLogged = true;
  return isLogged ? (
    <div className="flex gap-4">
        {children}
        {avatar}
        {piece}
        
    </div>
  ) : (
<div>
  {login}
</div>
    
  )
}
