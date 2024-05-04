import React from 'react'
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";





const MyPosts = (props) => {
    let PostElement = props.posts.map(posts => <Post message={posts.message} likeCount={posts.likeCount}/>)
    let newPostElement = React.createRef();

    let onAddPost = (props) => {
        props.addPost();
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }

    return (
        <div>
            Posts
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
                <button onClick={onAddPost}>*</button>
            </div>
            <div className={s.item}>
                {PostElement}
            </div>
        </div>

    )
}

export default MyPosts;