import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css'






const DialogItem = (props) => {
    let path = "/dialogs/" + props.id


    return (
        <NavLink className={s.dialogItem} to={path}>
            <div className={s.avaItem}>
                <img className={s.ava} src={props.link}/>
            </div>
            <div className={s.person}>
                {props.name}
            </div>
        </NavLink>
    )
}

export default DialogItem;