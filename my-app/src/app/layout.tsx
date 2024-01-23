import Heading from "@/components/header"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor:"red", padding:"1rem"}}>
          <Heading/>
        </header>
        {children}

        <footer style={{backgroundColor:"blueviolet", padding:"1rem"}}>This is my footer</footer>
        </body>
    </html>
  )
}
