import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { sendChat } from './utilities/chat';
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";


function App() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
    
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
