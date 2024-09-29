'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter();
  const navigate = (name) => [
    router.push(name)
  ]
  return (
    <div>
      <h1>This is About Page</h1>
      <button onClick={() => navigate('/')}>Go to Home page</button>
    </div>
  )
}

export default page
