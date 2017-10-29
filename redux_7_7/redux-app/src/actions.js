import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = (text) => {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text: text
    }
}