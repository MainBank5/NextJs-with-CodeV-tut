import { Metadata } from "next"

export const metadata : Metadata = {
    title: {
        absolute:"contact" //this will ignore the template metadata defined in the rootlayout
    }
}

export default function Contact () {
    return <h1>Contact Me Page</h1>
}