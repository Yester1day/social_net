import s from './Dialogs.module.css'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let DialogElement = state.dialogs.map(d => <li><DialogItem name={d.name} id={d.id} link={d.imgLink}/></li>)   //мапим каждый элемент списка пользователей с сервера
    let MessageElement = state.messages.map(m => <MessageItem message={m.message}/>)
    let newMessageBody = state.newNessageBody;

    let onSendMessageClick = () =>{
        props.sendMessage();

    }
    let onNewMessageChange = (e) =>{
       let body = e.target.value;
        props.updateNewMessageBody(body);

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <ul>
                    {DialogElement}
                </ul>
            </div>
            <div className={s.messages}>
                {MessageElement}
            </div>
            <div>
                <textarea placeholder='Enter your message'
                          value={newMessageBody}
                          onChange={onNewMessageChange}>Enter your mail</textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;