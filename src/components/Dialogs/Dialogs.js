import s from './Dialogs.module.css'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialog-reducer";



const Dialogs = (props) => {
    let state = props.store.getState().dialogPage;

    let DialogElement = state.dialogs.map(d => <li><DialogItem name={d.name} id={d.id} link={d.imgLink}/></li>)   //мапим каждый элемент списка пользователей с сервера
    let MessageElement = state.messages.map(m => <MessageItem message={m.message}/>)
    let newMessageBody = state.newNessageBody;

    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator())

    }
    let onNewMessageChange = (e) =>{
       let body = e.target.value;
       props.store.dispatch(updateNewMessageCreator(body))

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
                onChange={onNewMessageChange}></textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;