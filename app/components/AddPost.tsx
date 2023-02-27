'use client'


import React, { useState } from 'react'

export default function AddPost() {
    const [title, setTitle] = useState("")
    const [isDisabled, setIsDisable]=useState(false)
  return (
 <form action="" className='bg-white my-8 p-7 rounded-md'>
    <div className='flex flex-col my-4'>
        <textarea className='p-4 text-lg rounded-md my-2 bg-gray-200' onChange={(e)=> setTitle(e.target.value)} name="title" value={title} placeholder="What's in your mind?"></textarea>
    </div>
    <div className={`flex items-center justify-between gap-2`}>
        <p className={`font-bold text-sm ${title.length >300 ? "text-red-700": "text-gray-700"}`}>{`${title.length}/300`}</p>
        <button
        disabled={isDisabled}
        className="p-4 bg-teal-600 text-lg rounded-md my-2 bg-gray-200"
        placeholder="what's on your mind?" 
        >Create a post</button>
    </div>
 </form>
  )
}
