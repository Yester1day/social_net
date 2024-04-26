import React from 'react'
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";





const MyPosts = (props) => {
    let PostElement = props.posts.map(posts => <Post message={posts.message} likeCount={posts.likeCount}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator() )
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);  //передаем новый текст пользователя в бизнес через функцию
        props.dispatch(action)

    }

    return (
        <div>
            Posts
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
                <button onClick={addPost}>*</button>
            </div>
            <div className={s.item}>
                {PostElement}
            </div>
        </div>

    )
}

export default MyPosts;