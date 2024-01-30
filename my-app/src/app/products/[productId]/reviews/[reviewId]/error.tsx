//to handle error gracefully in a deeply nested component we use error.tsx. its a client side component
//this will help avoid breaking down the entire application and instead error is handled in the affected component
//it helps isolate errors to affected segments,keeping the rest of app functional
"use client"

type Errorprops  = {
    error:Error;
    reset: () => void;
}

export default function Error({error, reset} : Errorprops) {
  return (
    <div>
        <h1>{error.message}</h1>
        <button onClick={reset}>Try Again</button>
    </div>
  )
}

//error file will cater to all its nested child segments

//some eerrors can be resolved by simply making a request/refresh again. In such we use reset function 