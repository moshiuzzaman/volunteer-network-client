import React, { useContext } from 'react';
import './Login.css'
import logo from '../../logos/logo.png'
import { Button, Container } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { ImArrowUpRight2 } from 'react-icons/im';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AllContext } from '../../App'
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './config';


firebase.initializeApp(firebaseConfig);
const Login = () => {
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const [allStates, setAllStates] = useContext(AllContext)
    const loginHandler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            setAllStates({ ...allStates, email: result.user.email, name: result.user.displayName })
            history.replace(from)
        })
    }
    return (
        <div className="page-bg">
            <Container align="center">
                <img className="login-logo" src={logo} alt="" />
                <div className="login mb-5">
                    <h1>Login With</h1>
                    <Button onClick={loginHandler} size="lg" className="rounded-pill" variant="outline-dark " block> <FcGoogle className="login-button-icon" /> Continue With Google</Button>
                    <p className="mt-2">Don't have an account ? <Link to="/login">Create an account</Link></p>
                </div>
                <Link to="/" ><Button className="rounded-pill back-to-home-btn">Back to home <ImArrowUpRight2 /></Button></Link>
            </Container>
        </div>
    );
};
export default Login;