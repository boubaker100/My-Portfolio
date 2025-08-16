import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" >
        <span className="text-lg font-bold  transition-colors text-primary hover:text-amber-300"
        >Boubaker Boudina</span>
    </Link>
  )
}
export default Logo