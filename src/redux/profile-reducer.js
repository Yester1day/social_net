const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'hello', likeCount: '12'},
        {id: 2, message: 'I m Dima', likeCount: '10'},
        {id: 3, message: 'this is my first post ', likeCount: '50'},
        {id: 4, message: 'hello world', likeCount: '19'},
    ],
    newPostText: 'title',
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 6,
                message: state.newPostText,
                likeCount: 0
            };
            let stateCopy = {...state};//поверхностная копирование
            stateCopy.posts = [...state.posts]; //глубокая копия
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
    }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const addPostCreator = () =>({ type: ADD_POST});
export const updateNewPostTextCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;