import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <header>
      <h2>Newsy App</h2>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/articles'>Articles</Link>
      </nav>
    </header>
  )
}

export default Menu
