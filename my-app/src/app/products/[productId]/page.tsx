import { Metadata } from "next"

type Productdetsprops = {
    params: {
        productId?: string;
    }
}


export const generateMetadata = async ({params}: Productdetsprops) :Promise <Metadata> => {
    const title = await new Promise (resolve =>{
        setTimeout(()=>{
            resolve(`iPhone ${params.productId}`)
        }, 1000)
    })

    return {
        title: `Product ${title}`,
    }
}



export default function Productdetails ({params}:Productdetsprops) {
    return <h2>Details about this product {params.productId}</h2>
}
