//the usual way is importing components
//however you can use slots. slots have a @folder naming convention and are passed as props in the main layout 

type Dashboardprops = {
    children:React.ReactNode;
    revenue:React.ReactNode;
    users:React.ReactNode;
    notifications:React.ReactNode;
}


export default function Dashboardlayout({
    children, 
    users, 
    revenue, 
    notifications}: Dashboardprops) {
  return (
    <>
        <div>{children}</div>
        
        <div className="flex">
            <div className="flex flex-col">
                <div>{users}</div>
                <div>{revenue}</div>
            </div>

            <div className="flex flex-1">{notifications}</div>
        </div>
    </>
  )
}
