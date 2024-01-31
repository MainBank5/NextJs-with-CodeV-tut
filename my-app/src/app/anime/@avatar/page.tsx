import Card from "@/components/card";
import Link from "next/link";


export default function Avatar() {
  return (
    <Card >
        <h1>User Avatar</h1>
        <Link href="/anime/archived" className="p-4 underline">Archived</Link>
    </Card>
  )
}
