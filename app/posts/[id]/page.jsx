'use client'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'

const PostDetail = () => {
    const router = useRouter;

    console.log("usePathname",usePathname)
  return (
    <div>
        <h2>Post details</h2>
        
    </div>
  )
}

export default PostDetail