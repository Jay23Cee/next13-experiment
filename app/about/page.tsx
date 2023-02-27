import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <main className='py-4 px-48'>
       <Link className='bg-teal-500 text-black font-medium py-1 px-3 rounded-md' href="/dashboard">Go to the dashboard</Link>
    </main>
  )
}
