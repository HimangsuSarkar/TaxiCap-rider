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
        <div className="header">
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand to="/home">TaxiCap-rider</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/home">Home</Link>
                        <Link to="/destination">Destination</Link>
                        <Link to="/login" > LogIn</Link >
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">{loggedInUser.email}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    )
};

export default Header;
