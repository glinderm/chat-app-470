import React, { useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError("");

        try {
            await logout();
            history.pushState("/login");
        } catch {
            setError("Failed to log out");
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2>Profile</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <p><strong>Username: </strong> {currentUser.username}</p>
                    <p><strong>Email: </strong> {currentUser.email}</p>
                    <p></p>
                    <p></p>
                    <p>
                    <Link to="/update-profile" className="btn btn-primary">Profile Settings</Link>
                    </p>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
