import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>

        <nav class="Nav">
          <Link to="/">Home</Link>
          <Link to="/page">Page</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header
