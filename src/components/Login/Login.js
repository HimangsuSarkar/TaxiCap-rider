
import React from 'react';
import { useState } from 'react';
import { Button, Form, Jumbotron } from 'react-bootstrap';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, handleGithubSignIn, handleGoogleSignIn, handleSignOut, initializeLOgInFramework, signInWithEmailAndPassword } from './LogInManage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
    })
    initializeLOgInFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const gitHubSignIn = () => {
        handleGithubSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }
    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleSubmit = (e) => {

        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })

        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })

        }

        e.preventDefault();
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }

    return (
        <div className="App">

            <h1>Our Authentication</h1>
            <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} />
            <label htmlFor="newUser">New User Sign Up</label><br />
            <form onSubmit={handleSubmit}>

                {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Enter your Name" />}<br />

                <input type="text" name="email" onBlur={handleBlur} placeholder='Enter your email' required /><br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="Enter your password" required /><br />
                <input type="password" name="ConfirmPassword" onBlur={handleBlur} placeholder="Confirm your password" required /><br />
                <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
            </form>
            <p style={{ color: 'red' }}> {user.error}</p>
            {
                user.success && <p style={{ color: 'green' }}> {newUser ? 'Created' : 'Logged In'} successfully!</p>
            }

            {
                user.isSignIn ? < Button onClick={signOut}>Sign out</Button> :
                    <Button onClick={googleSignIn} ><FontAwesomeIcon icon={faGoogle} />  Sign In Google</Button>
            }
            {
                user.isSignIn ? < Button onClick={signOut}>Sign out</Button> :
                    <Button onClick={gitHubSignIn} ><FontAwesomeIcon icon={faGithub} /> Sign in By Github</Button>
            }

            {/* <Jumbotron>
                <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} />
                <label htmlFor="newUser">New User Sign Up</label><br />
                <Form onSubmit={handleSubmit}>

                    {newUser &&
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" onBlur={handleBlur} placeholder="Enter name" />
                        </Form.Group>
                    }
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onBlur={handleBlur} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handleBlur} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handleBlur} placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {newUser ? 'Sign Up' : 'Sign In'}
                    </Button>
                </Form>
                <p style={{ color: 'red' }}> {user.error}</p>
                {
                    user.success && <p style={{ color: 'green' }}> {newUser ? 'Created' : 'Logged In'} successfully!</p>
                }

                {
                    user.isSignIn ? < Button onClick={signOut}>Sign out</Button> :
                        <Button onClick={googleSignIn} ><FontAwesomeIcon icon={faGoogle} />  Sign In Google</Button>
                }
                {
                    user.isSignIn ? < Button onClick={signOut}>Sign out</Button> :
                        <Button onClick={gitHubSignIn} ><FontAwesomeIcon icon={faGithub} /> Sign in By Github</Button>
                }
            </Jumbotron> */}



            {/* <MDBContainer>
                < MDBRow >
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <Form onSubmit={handleSubmit}>
                                    <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} />
                                    <label htmlFor="newUser" className="h4 text-center py-4">New User Sign Up</label><br />
                                    <div className="grey-text">
                                        {newUser &&
                                            <MDBInput onBlur={handleBlur}
                                                label="Your name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />}
                                        <MDBInput onBlur={handleBlur}
                                            label="Your email"
                                            icon="envelope"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />

                                        <MDBInput onBlur={handleBlur}
                                            label="Your password"
                                            icon="lock"
                                            group
                                            type="password"
                                            validate
                                        />
                                        <MDBInput onBlur={handleBlur}
                                            label="Confirm  Your password"
                                            icon="lock"
                                            group
                                            type="password"
                                            validate
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="cyan" type="submit" value={newUser ? 'Sign Up' : 'Sign In'}>
                                            {newUser ? 'Sign Up' : 'Sign In'}
                                        </MDBBtn>
                                    </div>
                                </Form>
                                <p style={{ color: 'red' }}> {user.error}</p>
                                {
                                    user.success && <p style={{ color: 'green' }}> {newUser ? 'Created' : 'Logged In'} successfully!</p>
                                }
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
         */}
        </div >

    );
}
export default Login;
