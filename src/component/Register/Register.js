import React, { useContext, useEffect, useState } from 'react';
import logo from '../../logos/logo.png'
import { Button, Container } from 'react-bootstrap';
import './Register.css'
import { ImArrowUpRight2 } from 'react-icons/im';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AllContext } from '../../App';

const Register = () => {
    const { id } = useParams()
    const [allStates] = useContext(AllContext)
    const { name, email } = allStates
    const [selectedOpportuniti, setSelectedOpportuniti] = useState({})

    const { title, img } = selectedOpportuniti
    useEffect(() => {
        fetch(`https://boiling-forest-81391.herokuapp.com/opportuniti/${id}`)
            .then(response => response.json())
            .then(data => setSelectedOpportuniti(data))
    }, [])

    const { register, handleSubmit } = useForm();
    
    const history = useHistory()
    const onSubmit = data => {
        const fullEventData = { ...data, title, img, email }
        fetch('https://boiling-forest-81391.herokuapp.com/addVolunteerEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fullEventData)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Thanks for perticipate a social work')
                    history.push('/events')

                }

            })

    };
    return (
        <div className="page-bg">
            <Container align="center">
                <img className="register-logo" src={logo} alt="" />
                <div className="register mb-5">
                    <h4 >Register as a volunteer</h4>
                    <form className="registerForm mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="name" defaultValue={name} name="name" ref={register({ required: true, min: 3, maxLength: 100 })} />
                        <input type="text" placeholder="Email" defaultValue={email} name="fromEmail" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                        <input type="date" name="date" id="" ref={register({ required: true })} />
                        <input type="text" placeholder="Description" name="Description" ref={register({ required: true })} />
                        <input type="text" placeholder="Opportunities Title" defaultValue={title} name="title" ref={register({ required: true })} />
                        <input type="submit" />
                    </form>
                </div>
                <Link to="/" ><Button className="rounded-pill back-to-home-btn">Back to home <ImArrowUpRight2 /></Button></Link>

            </Container>
        </div>
    );
};

export default Register;