import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Registration = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 w-50 mx-auto">
                    <h3 className='text-center my-4'>Register Here!!</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control type="text" placeholder="your name" />
                        </Form.Group>

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
            </div>
        </div>
    );
};

export default Registration;