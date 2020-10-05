import React, { useEffect, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

const EventsList = ({ event, handleDeleteEvent }) => {
    const { title, eventDate, _id } = event
    const [interested, setInterested] = useState([])
    useEffect(() => {
        fetch(`https://boiling-forest-81391.herokuapp.com/event?title=${title}`)
            .then(response => response.json())
            .then(data => setInterested(data))
    }, [])
    return (
        <tr>
            <td>{title}</td>
            <td>{eventDate}</td>
            <td>{interested.length }  Volunteer</td>
            <td align="center" className="m-0 p-0"><button onClick={() => handleDeleteEvent(_id)} className="deleteButton"><RiDeleteBinLine /></button></td>
        </tr>
    );
};

export default EventsList;