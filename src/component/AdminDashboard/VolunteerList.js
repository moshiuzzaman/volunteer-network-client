import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
const VolunteerList = ({ volunteer, handleCancleEvent }) => {
    const { name, title, fromEmail, date, _id } = volunteer
    return (
        <tr>
            <td>{name}</td>
            <td>{fromEmail}</td>
            <td>{date}</td>
            <td>{title}</td>
            <td align="center" className="m-0 p-0"><button onClick={() => handleCancleEvent(_id)} className="deleteButton"><RiDeleteBinLine /></button></td>
        </tr>
    );
};

export default VolunteerList;