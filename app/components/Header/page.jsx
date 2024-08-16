import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='logo'><Link href='/'>Logo</Link></div>
        <div className='menu'>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/posts'>Posts</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header