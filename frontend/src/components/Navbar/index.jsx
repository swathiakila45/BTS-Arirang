import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <span className='navbar__logo'>BTS — 아리랑</span>

            <ul className='navbar__links'>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/members">Members</NavLink></li>
                <li><NavLink to="/album">Album</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
