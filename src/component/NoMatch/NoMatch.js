import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NoMatch.css'

const NoMatch = () => {
    const img = 'https://i.ibb.co/xJ4JjGm/Mild-Cheery-Graywolf-small.gif'
    return (
        <Container>
            <Row className="noMAtchpage">
                <Col md={6}>
                    <img src={img} alt="" />
                </Col>
                <Col md={6}>
                    <h1 className="nomatch headding">404</h1>
                    <h1 className="pagenotfound">Page Not Found</h1>
                    <Link to="/"><Button>Back Home</Button></Link>
                </Col>
            </Row>
        </Container>
    );
};
export default NoMatch;