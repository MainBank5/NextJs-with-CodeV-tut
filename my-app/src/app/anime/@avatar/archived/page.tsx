import Card from "@/components/card";
import Link from "next/link";


export default function Archived() {
  return (
    <Card >
        <h1>You were redirected here to Archived Avatar</h1>
        <Link href="/anime" className="p-6 underline">Default main page</Link>
    </Card>
  )
}
