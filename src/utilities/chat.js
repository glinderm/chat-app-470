import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import { addValue } from './database';

let current = 0;

export function sendChat() {
    let msg = document.getElementById("chat-input").value;
    //let msgRef = {"msg": msg, "num": current};
    //rtdb.push(chatsRef, msgRef);
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    let td = document.createElement('td');
    //tr.appendChild(document.createTextNode(msg));
    document.querySelector('tbody').appendChild(tr);
    tr.appendChild(th);
    tr.appendChild(td);
    current++;
}

export function sendChat2() {
    let table = document.getElementById("chat-table");
    let tr = table.insertRow(current);
    let th = tr.insertCell(0);
    let td = tr.insertCell(1);
    td.innerHTML = document.getElementById("chat-input").value;
    th.innerHTML = current;
    tr.id = "chat-" + current;
    th.scope = "row";
    current++;
}