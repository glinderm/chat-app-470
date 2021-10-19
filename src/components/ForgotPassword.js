import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage("");
            setError("");
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check your email inbox for your password reset");
        } catch {
            setError("Failed to reset password")
        }
        setLoading(false);
    }

    return (
        <div>
            <Card>
                <Card.Body className="card-body">
                    <h2 className='text-center mb-4'>Reset my password</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required className="signup-btn" />
                        </Form.Group>
                        <Button disabled={loading} type="submit">Reset Password</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Don't have an account? <Link to="/signup">Sign up here!</Link>
            </div>
        </div>
    )
}
