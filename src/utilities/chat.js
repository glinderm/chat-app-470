import '../index.css';
//import { addValue } from './database';

let current = 0;
//let count = 0;
/*
function deleteChat() {
    //let delChat = document.getElementById('chat-' + idx);
    //let parent = delChat.parentElement;
    //parent.removeChild(delChat);
    //document.getElementById("chat-" + idx).remove();
    alert("Btn clicked");
    count--;
}
*/

export function sendChat() {
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