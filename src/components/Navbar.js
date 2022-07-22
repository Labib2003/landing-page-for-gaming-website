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
        <div class="navbar bg-white bg-opacity-20 p-0 border-b-white border-b">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navbarLinks}
                </ul>
            </div>
            <div class="hidden lg:flex w-full">
                <ul class="menu menu-horizontal p-0 saira uppercase font-bold text-lg text-white w-full justify-around">
                    {navbarLinks}
                    <li>
                        <div class="form-control border-white">
                            <input type="text" placeholder="Search for Tournaments,games etc"  className='input'/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='navbar-end mr-3'>
                <button className='custom-button bg-white'><p className='saira px-24 py-4 uppercase'>Login</p></button>
                <button className='custom-button'><p className='saira px-24 py-4 text-white uppercase'>Sign Up</p></button>
            </div>
        </div>
    );
};

export default Navbar;