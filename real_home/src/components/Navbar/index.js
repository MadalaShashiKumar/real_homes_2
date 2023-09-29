import React from "react";
import './index.css'

const Navbar = () => {
    return (
        <nav className="nav-container d-flex justify-content-between p-4">
            <img src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/ultra-header-logo.png" alt="logo" />
            <ul className="nav-ul d-flex ">
                <li className="pt-2">Home</li>
                <li className="pt-2">Real Estate</li>
                <li className="pt-2">Property Single</li>
                <li className="pt-2">Blog</li>
                <li className="pt-2"> Contact</li>
                <li className="pt-2">1-800-555-4321</li>
            </ul>
        </nav>
    )
}
export default Navbar