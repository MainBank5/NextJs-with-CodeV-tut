//you can also intercept a file above. look at the (..)

import Link from "next/link";

export default function F4() {
    return (
        <div>
          <h1> This is F4 page</h1>
          <Link href="/f1/f3" className="underline">F3</Link>
          <Link href="/about" className="underline">About</Link>
        </div>
    )
  }