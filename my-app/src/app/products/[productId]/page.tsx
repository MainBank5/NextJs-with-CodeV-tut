export default function Productdetails ({params}:{params:{productId: string}}) {
    return <h2>Details about this product {params.productId}</h2>
}