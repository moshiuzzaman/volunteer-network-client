import React, { useEffect, useState } from 'react';

import { Col, Row, Table } from 'react-bootstrap';
import './AdminDashboard.css'
import AdminMenu from './AdminMenu';
import EventsList from './EventsList';

const AllEvents = () => {
    const [allEvents, setAllEvents] = useState([])
    useEffect(() => {
        fetch('https://boiling-forest-81391.herokuapp.com/opportunities')
            .then(response => response.json())
            .then(data => setAllEvents(data))
    }, [])

    const handleDeleteEvent = (id) => {
        fetch(`https://boiling-forest-81391.herokuapp.com/deleteEvent/${id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
            .then(data => {
                if (data) {
                    const newEvents = allEvents.filter(ve => ve._id !== id)
                    setAllEvents(newEvents)
                }
            })
    }

    return (
        <Row>
            <AdminMenu />
            <Col md={9} className='m-0 p-0'>
                <div className="adminDashboardHeader">
                    <h2>Volunteer Register List</h2>
                </div>
                <div className="adminDashboardDetails">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Events Title</th>
                                <th>Event Date</th>
                                <th>Interested Volunteer</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allEvents.length < 0 ? <p align="center" className="mt-4">No Events Added</p> :
                                    allEvents.map(ev => <EventsList key={ev._id} event={ev} handleDeleteEvent={handleDeleteEvent}></EventsList>)
                            }
                        </tbody>
                    </Table>
                </div>
            </Col>
        </Row>
    );
};

export default AllEvents;