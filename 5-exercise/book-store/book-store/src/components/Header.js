import React from 'react';
import {NavLink} from 'react-router-dom';

import "./header.css";
const Header = () => {
    return (
        <>
        <div className='header'>
            <div className='row'>
                <NavLink to="/">
        <div className='icon'><i className="fa-solid fa-book-bookmark"></i></div>
        </NavLink>
        <nav>
            <NavLink to="/add">Add Book</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/about">About Us</NavLink>
        </nav>
        </div>
        </div>
        </>
    )
}

export default Header
