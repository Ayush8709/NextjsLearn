'use client'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const router = useRouter()

  return (
    <div>
      <h1>This is Login Page</h1>
      <Link href='/'>go to home page</Link>
      <button onClick={()=>router.push('/about')}>Go to About page</button>
    </div>
  )
}

export default page
