const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

}

 const dialogReducer = (state = initialState, action) => {
     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY: {
             let stateCopy = {...state};
             stateCopy.newMessageBody = {...state.newMessageBody};
             stateCopy.newMessageBody = action.body
             return stateCopy;
         }
         case SEND_MESSAGE: {
             let stateCopy = {...state};
             stateCopy.newMessageBody = {...state.newMessageBody};
             stateCopy.messages = [...state.messages];
             let body = stateCopy.newMessageBody;
             stateCopy.newMessageBody = '';
             stateCopy.messages.push({id: 6, message: body});
             return stateCopy;
         }
         default:
             return state;
     }
 }

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogReducer;