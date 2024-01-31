//programatic navigation
"use client"

import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter()
    const handleClick  = () => {
        console.log("placing order");
        {/*router.push("/contact");*/}
        router.back()
    }
  return (
    <div className="m-10">
        <h1>order product</h1>
        <button onClick={handleClick} className="bg-blue-400 px-6 py-2 rounded-full">Place order</button>
    </div>
  )
}

//the push method adds the defined path to the url completely replacing the current path
//alternatively you can use replace instead of push
//using back the user will be directed to the url from the history stack , if it exists
//if there is no such entry in the history stack then it will go one level up</s>
//.forward() to navigate to the next page
