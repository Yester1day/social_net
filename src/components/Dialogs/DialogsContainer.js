import React from 'react'
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () =>{
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) =>{
            dispatch(updateNewMessageCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;