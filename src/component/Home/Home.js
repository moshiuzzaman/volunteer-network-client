import React, { createRef, useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, Row } from 'react-bootstrap';
import MenuBar from '../MenuBar/MenuBar';
import './Home.css'
import VolunteerOpportunities from './VolunteerOpportunities';
import preeload from '../../logos/preeloder.gif'

const Home = () => {

    const [opportunities, setOpportunities] = useState([])
    useEffect(() => {
        fetch('https://boiling-forest-81391.herokuapp.com/opportunities')
            .then(res => res.json())
            .then(data => setOpportunities(data))
    }, [])

    const inputvalue = createRef()

    const searchHandle = () => {
        const searchValue = inputvalue.current.value
        fetch(`https://boiling-forest-81391.herokuapp.com/events?filter=${searchValue}`)
            .then(response => response.json())
            .then(data => setOpportunities(data))
    }

    return (
        <div className="home">
            <Container align="center">
                <MenuBar />
                <h3 className="search-heading mb-4 mt-5 pt-5">I grow by helping people in need.</h3>
                <Form >
                    <FormControl ref={inputvalue} type="text" name="search" placeholder="Search...." className="searchinput" />
                    <Button className="search-button" onClick={searchHandle}>Search</Button>
                </Form>
                <Row className="mt-5 pb-5">
                    {
                        opportunities.length <= 0 ? <img className="preeload-image" src={preeload} alt="" /> :
                            opportunities.map(vo => <VolunteerOpportunities key={vo._id} opportunity={vo}></VolunteerOpportunities>)
                    }
                </Row>
            </Container>
        </div>
    );
};
export default Home;