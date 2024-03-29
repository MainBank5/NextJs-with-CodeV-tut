//to style active links we'll use usePathname. but hooks can only be used in client side components. so we have to specify this is a client component
//at the top
"use client"

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'


type Aothprops = {
    children:React.ReactNode
}


export default function Aothlayout({children}:Aothprops) {
    const Navlinks = [
        {name:"Signin", href:"/signin"},
        {name:"Signup", href:"/signup"},
        {name:"Forgot-password", href:"/new-password"},
    ];
    const pathName = usePathname();
    const [input, setInput] = useState("")
  return (
    <div>
        <div className='bg-red-400 p-8'>
            <input type='text' onChange={(e)=>{setInput(e.target.value)}}/>
        </div>
        {Navlinks.map((link, index) => {
            const isActive = pathName.startsWith(link.href);
            return (
                <Link key={index} href={link.href}
                className={isActive ? "font-bold text-yellow-400 mr-4" :"text-green-600 mr-6"}
                >{link.name}</Link>
            )
        }
        
        )}
            
        
        {children}
    </div>
  )
}

//const pathname refers to the pathname/href in the url
//with a template file, everything in the dom is refreshed and state isnt maintained, unlike layout file whihc only updates the changed UI