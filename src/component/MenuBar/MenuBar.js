import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AllContext } from '../../App';
import logo from '../../logos/logo.png'
import "./MenuBar.css"

const MenuBar = () => {
    const [allStates] = useContext(AllContext)
    return (
        <div>
            <Navbar className="menuBar" expand="lg">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto menuBar-links ">
                        <Link className="menuBar-link" to="/">Home</Link>
                        <Link className="menuBar-link" to="/donation">Donation</Link>
                        <Link className="menuBar-link" to="/events">Events</Link>
                        <Link className="menuBar-link" to="/Blog">Blog</Link>
                        {
                            allStates.name ? <Link className="menuBar-name" to="/events">{allStates.name}</Link> : <> <Link className="menuBar-button" to="/login"><Button variant="primary">Register</Button></Link>
                                <Link className="menuBar-button" to="/admin/registeredlist"><Button variant="dark">Admin</Button></Link></>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default MenuBar;