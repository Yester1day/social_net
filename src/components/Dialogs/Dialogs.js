import s from './Dialogs.module.css'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";



const Dialogs = (props) => {

    let DialogElement = props.state.dialogs.map(d => <li><DialogItem name={d.name} id={d.id} link={d.imgLink}/></li>)   //мапим каждый элемент списка пользователей с сервера
    let MessageElement = props.state.messages.map(m => <MessageItem message={m.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () =>{
        let text = newMessageElement.current.value;
        alert(text)
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
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;