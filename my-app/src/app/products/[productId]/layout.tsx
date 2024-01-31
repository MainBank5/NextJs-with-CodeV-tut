import { ReactNode } from "react"


type Productdetsprops = {
    children:React.ReactNode
};

const ProductIDLayout = ({children}: Productdetsprops) => {
  return (
    <div>
        
        {children}
        <p className="text-5xl font-bold text-center">Featured products</p>
    </div>
  )
}

export default ProductIDLayout;