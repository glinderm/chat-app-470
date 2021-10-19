import React from 'react';
// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {  } from 'react-bootstrap';
import { Container, Row, Col, Button } from 'react-bootstrap'
// import { useAuth } from "../contexts/AuthContext";
// import { useHistory } from "react-router-dom";
import { chatsRef } from "../firebase";

export default function Chatroom() {
    // const [error, setError] = useState("");
    // const { currentUser, chatMsg } = useAuth();
    // const history = useHistory();
    let current = 0;

    function sendChat() {
        let msg = document.getElementById("chat-input");
        if (msg.value === "") {
            return;
        }
    
        let table = document.getElementById("chat-table");
        let tr = table.insertRow(current);
        let th = tr.insertCell(0);
        let td = tr.insertCell(1);
        //let x = tr.insertCell(2);
        
        //x.innerHTML = '<Button type="submit" className="xBtn" id="x' + current + '" onClick={deleteChat}>' + 'X' + '</Button>'
        //x.innerHTML = '<button onClick="deleteChat()">X</button>';
        td.innerHTML = msg.value;
        td.className = "chat-row";
        th.innerHTML = current;
        tr.id = "chat-" + current;
        th.scope = "row";
        th.className = "msg-index";
        msg.value = "";
        current++;
    }

    // chatsRef.once("value", function(ss){
    //     // document.querySelector('#chat-table').remove();
    //     let i = 0;
    //     let table = document.getElementById("chat-table");
    //     ss.forEach(function(item) {
    //        document.querySelector('#chat-table').insertRow(i)
           
    //        let tr = table.insertRow(i);
    //        let th = tr.insertCell(0);
    //        let td = tr.insertCell(1);
    //        td.innerHTML = item.val();
    //        td.className = "chat-row";
    //        th.innerHTM = i;
    //        tr.id = "chat-" + i;
    //        th.className = "msg-index";

    //        i++;
    //     });
    //   });

    return (
        <div className="chatroom-page" id="chat-main">
            <Container className="App" fluid>
                <Row className="main-page">
                    <Col className="main-page">
                        <Row className="App-header">
                            <h6>Echo Chamber</h6>
                        </Row>
                        <Row className="App-body">
                            <div className='chatlog-body' id="chat-body">
                                <table id='chat-table' class="table table-striped table-responsive">
                                <tbody>
                                </tbody>
                                </table>
                            </div>
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
        </div>
    )
}