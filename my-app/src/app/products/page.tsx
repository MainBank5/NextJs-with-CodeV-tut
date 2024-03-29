import Link from 'next/link'

export default function Products () {
    const productId = 100
    return (
        <>
        <h1>Product list</h1>
       <Link href="/">Home</Link>
        <ul>
            <li><Link href="products/1">Product 1</Link></li>
            <li><Link href="products/2">Product 2</Link></li>
            <li><Link href="products/3" replace>Product 3</Link></li>
            <li><Link href={`products/${productId}`} replace>Product {productId}</Link></li> 
            
        </ul>
        </>
    )
}

//replace replaces the current history state 
/*In Next.js, the replace prop in the Link component indicates that when the link is clicked, 
it should replace the current URL in the browser history instead of adding a new entry. 
This means that when the user navigates using a link with replace set to true, 
they won't be able to use the browser's back button to go back to the previous page; 
instead, they'll go back to the page before the current one in the history.
*/