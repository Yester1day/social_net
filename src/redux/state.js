import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hello', likeCount: '12'},
            {id: 2, message: 'I m Dima', likeCount: '10'},
            {id: 3, message: 'this is my first post ', likeCount: '50'},
            {id: 4, message: 'hello world', likeCount: '19'},
            {id: 5, message: 'see you', likeCount: '6'},
        ],
        newPostText:'title'
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: 'Dima', imgLink:'https://avatars.mds.yandex.net/i?id=4a7f7d1c3430b6b6dc8034d60240d300f1467ce2-12478411-images-thumbs&n=13'},
            {id: 2, name: 'Irena', imgLink:'https://avatars.mds.yandex.net/i?id=513ca473c1441b9cb6a14f6a9a46c4f1301d77d5-4570314-images-thumbs&n=13'},
            {id: 3, name: 'Nikita', imgLink: 'https://avatars.mds.yandex.net/i?id=756770ccbd1cb9d53311d9dda780c6f3354f8b4e-10071482-images-thumbs&n=13'},
            {id: 4, name: 'Vlad', imgLink:'https://avatars.mds.yandex.net/i?id=04c658f4fc52034e2322cdecaa75ba0584fe06a5-12416107-images-thumbs&n=13'},
        ], messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are u?'},
            {id: 3, message: 'my number 7395793692986'}
        ]
    }
}

//add new post function
export let addPost = (postMessage) =>{

    let newPost = {
        id: 6, message: postMessage, likeCount: '0'
    };
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}


//считывание инпута в myPosts
export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}



export default state;
