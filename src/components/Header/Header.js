import React from 'react';
import { useContext } from 'react';
import Nav from 'react-bootstrap/cjs/Nav';
import Navbar from 'react-bootstrap/cjs/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='header'>
            {/* <img src={logo} alt="" /> */}
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/login" > LogIn</Link >
                <button onClick={() => setLoggedInUser({})}>Sign Out</button>
            </nav >
        </div >
    )
};

export default Header;
