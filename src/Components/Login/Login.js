import React, { useContext, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import {  Col, Container, Row } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';
// import google from '../../Icon/google.png';
// import facebook from '../../Icon/fb.png';
import './Login.css';

const Login = () => {

//    google sign part

    const [user, setUser] = useContext(UserContext)

    const [newUser, setnewUser] = useState(false)

    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/search" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {

        const goolgeProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(goolgeProvider).then(function (result) {



            const { displayName, email } = result.user;
            const signedInUser = { first: displayName, email }
            setUser(signedInUser)
            history.replace(from)

        }).catch(err => {

            console.log(err.message);
        });

    }
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSignIn = () => {

        firebase.auth().signInWithPopup(fbProvider).then(function (result) {

            const { displayName, email } = result.user;
            const signedInUser = { first: displayName, email }
            setUser(signedInUser)
            history.replace(from)
            // ...
        }).catch(function (error) {
            console.log(error);
        });
    }








    const handleBlurChange = (e) => {

        let isFieldValid = true;

        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === 'password') {
            const isPasswordValidlength = e.target.value.length > 5
            const isPasswordValid = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && isPasswordValidlength
        }
        if (isFieldValid) {

            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }


    const handleSubmit = (e) => {
        console.log(user.email, user.password);

        if (user.email && (user.password === user.confirmPassword)) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = "Account created successfully!"
                    newUserInfo.first = `${user.first} ${user.last}`
                    setUser(newUserInfo)
                    updateUserName(user.first)
                    history.replace(from)
                    console.log(res.user)
                    // 
                })
                .catch(function (error) {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = ''
                    setUser(newUserInfo)
                    // ...
                });





        }
        e.preventDefault()

    }

    const handleSignIn = (e) => {
        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email && user.password)
                .then(res => {
                    const newUserInfo = { ...user }

                    newUserInfo.error = ''
                    newUserInfo.success = 'Logged Successfully'
                    newUserInfo[user.first] = res.user.displayName
                    setUser(newUserInfo)
                    history.replace(from)

                })
                .catch(function (error) {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = ''
                    setUser(newUserInfo)
                    console.log(error);
                });
            e.preventDefault()
        }


    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(function () {
            console.log("update User Name", user.displayName);
        }).catch(function (error) {
            console.log(error);
        });
    }



    return (
        <div style={{ textAlign: "center", color: "white", }}>
            {user.name}
            <div >
            <Col md={5}>
             
                </Col>

  <Col md={7} style={{border: "2px solid gray", boxShadow: "5px 5px 10px black" ,backgroundColor:'white',margin: 'auto',width: '50%'}}>


                <Form onSubmit={newUser ? handleSubmit : handleSignIn}>
                    {newUser && <FormGroup>
                        <Label for="name">Name</Label>
                        <Input

                            type="name"
                            onBlur={handleBlurChange}
                            name="name"
                            placeholder="Enter Your Name"
                        />
                    </FormGroup>}

                    <FormGroup>
                        <Label for="location">Email</Label>
                        <Input
                            type="name"
                            onBlur={handleBlurChange}
                            name="email"
                            placeholder="Enter Your Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="location">Password</Label>
                        <Input
                            type="password"
                            onBlur={handleBlurChange}
                            name="password"
                            placeholder="Enter Your Password"
                        />
                    </FormGroup>
                    {newUser && <FormGroup>
                        <Label for="location">Password</Label>
                        <Input
                            type="password"
                            onBlur={handleBlurChange}
                            name="password"
                            placeholder="Enter Your Password"
                        />
                    </FormGroup>}


                    <Button size='lg' color="warning"> <strong> {newUser ? "Sign Up" : 'Login'} </strong> </Button>

                    <p className='login__alreadyText'>{newUser ? "Already have an account?" : "Create An Account"} <span style={{ color: '#F9A51A', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setnewUser(!newUser)}>{newUser ? "Login" : "Sign Up"}</span></p>



                    {user.success && <h3 style={{ color: 'green' }}>User {newUser ? 'Created' : "Logged"} SuccessFully</h3>}

                </Form>
                </Col>


            </div>
            <br/>

            <Button className='btn-google' onClick={handleGoogleSignIn}> Continue With Google </Button>
            <br />
            <br />

            <Button className='btn-facebook'  onClick={handleFacebookSignIn}>Continue With Facebook </Button>

        </div>
    );
};

export default Login;