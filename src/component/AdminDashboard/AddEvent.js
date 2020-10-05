import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AdminDashboard.css'
import { useForm } from 'react-hook-form';
import AdminMenu from './AdminMenu';
import { useHistory } from 'react-router-dom';


const AddEvent = () => {
    const history = useHistory()
    const { register, handleSubmit } = useForm({ mode: "onChange" });
    const img = 'https://i.ibb.co/vQjH52Z/dummy.png'
    const onSubmit = data => {
        const allData = { img, ...data }
        fetch('https://boiling-forest-81391.herokuapp.com/addEvent', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(allData)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Event Added Succesfully')
                    history.push('/admin/allEvents')
                }
            })
    };
    return (
        <Row>
            <AdminMenu />
            <Col md={9} className='m-0 p-0'>
                <div className="adminDashboardHeader">
                    <h2>Add Event</h2>
                </div>
                <div className="adminDashboardDetails">
                    <div className="addEventForm">
                        <form className="addEventForm mt-4" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Event Title" name="title" ref={register({ required: true, min: 3, maxLength: 100 })} />
                            <input type="text" placeholder="Description" name="Description" ref={register({ required: true })} />
                            <input type="date" name="eventDate" id="" ref={register({ required: true })} />
                            <select name="headerBg" ref={register({ required: true })}>
                                <option >Select Header Background </option>
                                <option value="#FFBD3E">Yellow </option>
                                <option value="#FF7044"> Orange </option>
                                <option value="#3F90FC"> Sky </option>
                                <option value="#421FCF"> Blue</option>
                            </select>
                            <input type="file" />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default AddEvent;