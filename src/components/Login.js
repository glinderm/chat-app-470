import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to sign in")
        }
        setLoading(false);
    }

    return (
        <div>
            <Card>
                <Card.Body className="card-body">
                    <h2 className='text-center mb-4'>Login</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required className="signup-btn" />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required className="signup-btn" />
                        </Form.Group>
                        <Button disabled={loading} type="submit">Login</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to="/forgot-password">Forgot your password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Don't have an account? <Link to="/signup">Sign up here!</Link>
            </div>
        </div>
    )
}
