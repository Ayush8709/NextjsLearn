import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>This is Login Page</h1>
      <h1><Link href='/login/under'>Go to Under Login page</Link></h1>
    </div>
  )
}

export default page
