'use client'
import Link from "next/link"
import { usePathname } from "next/navigation" // fetch the url after localhost:3000
export default function Layout({ children }) {
    const pathname = usePathname();
    return (
        <div>
            {/* // condation layout */}
            {
                pathname !== '/login/under' ? <h1>This is common  layout</h1> :  <h1>This is condation layout</h1>

            }
           
            <Link href='/'>Go To Home Page</Link>
            {children}
        </div>
    )
}