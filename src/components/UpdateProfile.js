import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    // const usernameRef = useRef();
    // const { currentUser, updatePassword, updateEmail, updateUsername } = useAuth();
    const { currentUser, updatePassword, updateEmail } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        const promises = [];
        setLoading(true);
        setError("");
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }

        // if (usernameRef.current.value !== currentUser.username) {
        //     promises.push(updateUsername(usernameRef.current.value));
        // }

        Promise.all(promises).then(() => {
            history.push("/");
        }).catch(() => {
            setError("Failed to update account")
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <div>
            <Card>
                <Card.Body className="card-body">
                    <h2 className='text-center mb-4'>Update Profile</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        {/* <Form.Group id='username'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type='username' ref={usernameRef} defaultValue={currentUser.username} className="signup-btn" />
                        </Form.Group> */}
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required defaultValue={currentUser.email} className="signup-btn" />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} placeholder="Leave blank to leave the same" className="signup-btn" />
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} placeholder="Leave blank to leave the same" className="signup-btn" />
                        </Form.Group>
                        <Button disabled={loading} type="submit">Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Link to="/">Cancel</Link>
            </div>
        </div>
    )
}
