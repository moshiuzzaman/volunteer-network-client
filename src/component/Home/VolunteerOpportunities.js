import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VolunteerOpportunities = ({ opportunity }) => {

    const { title, img, headerBg, _id } = opportunity

    const styles = {
        background: `${headerBg}`,
    }
    
    return (
        <Col md={3} className="p-0 m-0" >
            <Link to={`/register/${_id}`}>
                <div className="opportunity">
                    <img className="opportunity-image w-100" src={img} alt="" />
                    <h5 style={styles} className="opportunity-title">{title}</h5>
                </div>
            </Link>
        </Col>
    );
};

export default VolunteerOpportunities;