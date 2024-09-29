import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href='/studentlist/1'>Ayush</Link>
                </li>
                <li>
                    <Link href='/studentlist/2'>Riya</Link>
                </li>
                <li>
                    <Link href='/studentlist/3'>Fukun</Link>
                </li>
                <li>
                    <Link href='/studentlist/4'>chukun</Link>
                </li>
               
            </ul>
        </div>
    )
}

export default page
