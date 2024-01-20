type Productdetsprops = {
    params: {
        productId?: string;
    }
}

export default function Productdetails ({params}:Productdetsprops) {
    return <h2>Details about this product {params.productId}</h2>
}
