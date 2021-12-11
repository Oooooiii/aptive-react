import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => { setClick(!click) }

    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <h1>Logo</h1>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/pricing">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/faq">FQA</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/contact">Contact</Link>
                    </li>
                </ul>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
