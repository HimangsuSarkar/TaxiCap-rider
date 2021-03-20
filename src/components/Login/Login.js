
import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


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

    const [setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    password: '',
                    photo: photoURL,
                };
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                };
                setUser(signedOutUser);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
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
    const handleSubmit = (e) => {

        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('sign in user info', res.user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(function () {
            console.log('user name updated successfully')
        }).catch(function (error) {
            console.log(error)
        });
    }


    const handleGithubSignIn = () => {
        var ghProvider = new firebase.auth.GithubAuthProvider();
        firebase
            .auth()
            .signInWithPopup(ghProvider)
            .then((res) => {
                const newUserInfo = { ...user };
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                console.log('sign in user info', res.user);
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
    }
    return (
        <div className="App">

            <h1>Our Authentication</h1>
            <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} />
            <label htmlFor="newUser">New User Sign Up</label><br />
            <Form onSubmit={handleSubmit}>

                {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Enter your Name" />}<br />

                <input type="text" name="email" onBlur={handleBlur} placeholder='Enter your email' required /><br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="Enter your password" required /><br />
                <input type="password" name="newPassword" onBlur={handleBlur} placeholder="Enter confirm password" required /><br />

                <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
            </Form>
            <p style={{ color: 'red' }}> {user.error}</p>
            {
                user.success && <p style={{ color: 'green' }}> {newUser ? 'Created' : 'Logged In'} successfully!</p>
            }

            {
                user.isSignIn ? < button onClick={handleSignOut}>Sign out</button> :
                    <button onClick={handleSignIn}>Sign In Google</button>
            }
            {
                user.isSignIn ? < button onClick={handleSignOut}>Sign out</button> :
                    <button onClick={handleGithubSignIn}>Sign in By Github</button>
            }


            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={handleSubmit}>
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
                                        {/* <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'} /> */}
                                        <MDBBtn color="cyan" type="submit" value={newUser ? 'Sign Up' : 'Sign In'}>
                                        </MDBBtn>
                                    </div>
                                </form>
                                <p style={{ color: 'red' }}> {user.error}</p>
                                {
                                    user.success && <p style={{ color: 'green' }}> {newUser ? 'Created' : 'Logged In'} successfully!</p>
                                }
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div >


    );
}
export default Login;
