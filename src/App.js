import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { sendChat } from './utilities/chat';
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import UpdateProfile from "./components/UpdateProfile";
// import CreateUser from "./components/CreateUser";


function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            {/* <PrivateRoute path="/createUser" component={CreateUser} /> */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
    
    /*
    <Container className="App" fluid>
      <Row className="main-page">
        <Col className="main-page">
          <Row className="App-header">
            <h6>Channels</h6>
          </Row>
          <Row className="App-body">
            <p className='chatlog-body'>
              <h6>Messages</h6>
              <table id='chat-table' class="table table-striped table-responsive">
                <tbody>
                </tbody>
              </table>
            </p>
          </Row>
          <Row className="App-chatbox">
            <label>
              <input type="text" name="chat-input" id="chat-input" />
              <Button type="submit" id="chat-submit" onClick={sendChat}>Send</Button>
            </label>
          </Row>
        </Col>
      </Row>
    </Container>
    */
  );
}

export default App;
