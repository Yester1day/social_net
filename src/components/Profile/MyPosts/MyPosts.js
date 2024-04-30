import React from 'react'
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";





const MyPosts = (props) => {
    let PostElement = props.posts.map(posts => <Post message={posts.message} likeCount={posts.likeCount}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostCreator() )
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextCreator(text);  //передаем новый текст пользователя в бизнес через функцию
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