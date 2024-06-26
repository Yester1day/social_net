import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello', likeCount: '12'},
                {id: 2, message: 'I m Dima', likeCount: '10'},
                {id: 3, message: 'this is my first post ', likeCount: '50'},
                {id: 4, message: 'hello world', likeCount: '19'},
            ],
            newPostText: 'title',
        },
        dialogPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dima',
                    imgLink: 'https://avatars.mds.yandex.net/i?id=4a7f7d1c3430b6b6dc8034d60240d300f1467ce2-12478411-images-thumbs&n=13'
                },
                {
                    id: 2,
                    name: 'Irena',
                    imgLink: 'https://avatars.mds.yandex.net/i?id=513ca473c1441b9cb6a14f6a9a46c4f1301d77d5-4570314-images-thumbs&n=13'
                },
                {
                    id: 3,
                    name: 'Nikita',
                    imgLink: 'https://avatars.mds.yandex.net/i?id=756770ccbd1cb9d53311d9dda780c6f3354f8b4e-10071482-images-thumbs&n=13'
                },
                {
                    id: 4,
                    name: 'Vlad',
                    imgLink: 'https://avatars.mds.yandex.net/i?id=04c658f4fc52034e2322cdecaa75ba0584fe06a5-12416107-images-thumbs&n=13'
                },
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are u?'},
            ],
             newMessageBody: ''

        },
        sidebar: {}
    },
    _callSubscriber() {   //rerenderEntereTree
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    //     addPost()  {
    //       let newPost = {
    //           id: 6, message: this._state.profilePage.newPostText , likeCount: 0
    //       };
    //         this._state.profilePage.posts.push(newPost);
    //         this._state.profilePage.newPostText='';
    //       this._callSubscriber(this._state)
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._callSubscriber(this._state);
        }
}




export default store;
window.store = store;








