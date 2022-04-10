import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 w-50 mx-auto">
                    <h3 className='text-center my-4'>Login Here!!</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="example@gmail.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                </div>
                <div className="col-md-12 text-center my-3">
                    <span>or Login with</span>
                    <div className='mt-4'>
                        <button onClick={() => signInWithGoogle()} className='google-btn'>Sign In with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;