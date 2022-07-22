import React from 'react';
import "./navbar.css"

const Navbar = () => {
    const navbarLinks = <>
        <li><a>Home</a></li>
        <li><a>Tournaments</a></li>
        <li><a>Compare Devices</a></li>
        <li><a>Shop</a></li>
    </>

    return (
        <div className="navbar bg-white bg-opacity-20 p-0 border-b-white border-b">
            <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navbarLinks}
                </ul>
            </div>
            <div className="hidden lg:flex w-full">
                <ul className="menu menu-horizontal p-0 saira uppercase font-bold text-lg text-white w-full justify-around">
                    {navbarLinks}
                    <li>
                        <div className="form-control border-white">
                            <input type="text" placeholder="Search for Tournaments,games etc" className='input' />
                        </div>
                    </li>
                </ul>
            </div>
            <div className='navbar-end ml-auto lg:ml-0 mr-3'>
                <button className='custom-button bg-white'><p className='saira px-24 py-4 uppercase'>Login</p></button>
                <button className='custom-button'><p className='saira px-24 py-4 text-white uppercase'>Sign Up</p></button>
            </div>
        </div>
    );
};

export default Navbar;