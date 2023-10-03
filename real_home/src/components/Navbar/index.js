import React from "react";
import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
    return (
        <nav className="nav-container d-flex justify-content-between p-4">
            <img src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/ultra-header-logo.png" alt="logo" />
            <ul className="nav-ul d-flex ">
                <li className="pt-2 nav-li">
                    <Link to='/' className="nav-link" >Home</Link>
                </li>
                <li className="pt-2 nav-li">
                    <Link to='/all/properties' className="nav-link">Real Estate</Link>
                </li>
                <li className="pt-2 nav-li">Property Single</li>
                <li className="pt-2 nav-li">
                    <Link to='/blogs' className="nav-link">Blogs</Link>
                </li>
                <li className="pt-2 nav-li"> Contact</li>
                <li className="pt-2 nav-li">1-800-555-4321</li>
            </ul>
        </nav>
    )
}
export default Navbar