import React from 'react'
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    let state = props.store.getState().dialogPage;

    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator())

    }
    let onNewMessageChange = (body) =>{
       props.store.dispatch(updateNewMessageCreator(body))

    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    )
}

export default DialogsContainer;