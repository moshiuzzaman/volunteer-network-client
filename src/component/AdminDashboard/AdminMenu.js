import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png'
import { FaUserFriends, FaPlus } from 'react-icons/fa';
import { BiLogOutCircle } from 'react-icons/bi';
import { RiCalendarEventLine } from 'react-icons/ri';

const AdminMenu = () => {
    return (
        <Col md={3} className='m-0 p-0'>
            <div className="adminMenu">
                <Link to="/"><img src={logo} alt="" className="adminMenuLogo logo"/></Link>
                <Link to="/admin/registeredlist" ><button ><FaUserFriends className="adminMenuIcon" /> Volunteer Register list</button></Link>
                <Link to="/admin/allEvents" ><button > <RiCalendarEventLine className="adminMenuIcon" />All Events</button></Link>
                <Link to="/admin/addEvent" ><button > <FaPlus className="adminMenuIcon" />Add Event</button></Link>
                <Link className="adminLogout" to="/" ><button > <BiLogOutCircle className="adminMenuIcon" />Log out</button></Link>
            </div>
        </Col>
    );
};

export default AdminMenu;