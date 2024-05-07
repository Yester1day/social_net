import React from 'react'
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state) =>{
    return {
        // newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}



const mapDispatchToProps = (dispatch) =>{
    return {
        updateNewPostText: (text) =>{
            dispatch(updateNewPostTextCreator(text))
        },
        addPost: () =>{
            dispatch(addPostCreator())
        }
    }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;