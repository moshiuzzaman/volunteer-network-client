import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { AllContext } from '../../App';
import MenuBar from '../MenuBar/MenuBar';
import SingelEvent from './SingelEvent';
import './VolunteerDashboard.css'

const VolunteerDashboard = () => {
    const [allStates] = useContext(AllContext)
    const { email } = allStates
    const [volunteerEvents, setVolunteerEvents] = useState([])
    useEffect(() => {
        fetch(`https://boiling-forest-81391.herokuapp.com/volunteerEvents?email=${email}`)
            .then(response => response.json())
            .then(data => setVolunteerEvents(data))
    }, [])

    const handleCancleEvent = (id) => {
        fetch(`https://boiling-forest-81391.herokuapp.com/cancleEvent/${id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
            .then(data => {
                if (data) {
                    const newEvents = volunteerEvents.filter(ve => ve._id !== id)
                    setVolunteerEvents(newEvents)
                }
            })
    }
    return (
        <Container>
            <MenuBar />
            <Row className="mt-5">
                {
                    volunteerEvents.map(ve => <SingelEvent key={ve._id} handleCancleEvent={handleCancleEvent} volunteerREvent={ve}></SingelEvent>)
                }
            </Row>
        </Container>
    );
};

export default VolunteerDashboard;