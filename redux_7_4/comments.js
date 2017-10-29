import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            },...state];
        case REMOVE_COMMENT:
            return state.filter(c => c.id !== action.id);

        case EDIT_COMMENT:
            const updatedComment = {
                id: comment.id,
                text: action.text,
                votes: comment.votes
            };
            return state.map(comment => comment.id === action.id ? updatedComment : comment);

        case THUMB_UP_COMMENT:
            const updatedComment = {
                id: action.id,
                text: comment.text,
                votes: comment.votes + 1
            };
            return state.map(comment => comment.id === action.id ? updatedComment : comment);

        case THUMB_DOWN_COMMENT:
            const updatedComment = {
                id: action.id,
                text: comment.text,
                votes: comment.votes - 1
            };
            return state.map(comment => comment.id === action.id ? updatedComment : comment);

        default:
            return state;
    }
}

export default comments;