import React from 'react'
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostCreator());
                    }
                    let onPostChange = (text) => {
                        let action = updateNewPostTextCreator(text);  //передаем новый текст пользователя в бизнес через функцию
                        store.dispatch(action);
                    }
                    return < MyPosts
                            updateNewPostText={onPostChange}
                            addPost={addPost}
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                        />
                }
            }
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer;