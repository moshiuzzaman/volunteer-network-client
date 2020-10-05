import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import './AdminDashboard.css'
import VolunteerList from './VolunteerList';
import AdminMenu from './AdminMenu';

const RegisteredVolunteer = () => {
    const [registeredVolunteer, setRegisteredVolunteer] = useState([])
    useEffect(() => {
        fetch('https://boiling-forest-81391.herokuapp.com/registeredVolunteer')
            .then(response => response.json())
            .then(data => setRegisteredVolunteer(data))
    }, [])
    const handleCancleEvent = (id) => {
        fetch(`https://boiling-forest-81391.herokuapp.com/cancleEvent/${id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
            .then(data => {
                if (data) {
                    const newEvents = registeredVolunteer.filter(ve => ve._id !== id)
                    setRegisteredVolunteer(newEvents)
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
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Registering Date</th>
                                <th>Volunteer List</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                registeredVolunteer.length < 0 ? <p align="center" className="mt-4">No Registered Volunteer</p> :
                                    registeredVolunteer.map(rv => <VolunteerList key={rv._id} volunteer={rv} handleCancleEvent={handleCancleEvent}></VolunteerList>)

                            }

                        </tbody>
                    </Table>
                </div>
            </Col>
        </Row>
    );
};

export default RegisteredVolunteer;