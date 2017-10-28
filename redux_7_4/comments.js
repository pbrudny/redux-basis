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
            return [state.filter(c => c.id !== action.id)];

        case EDIT_COMMENT:
            const comment = state.find(c => c.id === action.id);
            const other_comments = state.filter(c => c.id !== action.id);
            const updated_comment = {
                id: comment.id,
                text: action.text,
                votes: comment.votes
            };
            return [updated_comment,...other_comments];

        case THUMB_UP_COMMENT:
            const comment = state.filter(c => c.id === action.id);
            const other_comments = state.filter(c => c.id !== action.id);
            const updated_comment = {
                id: action.id,
                text: comment.text,
                votes: comment.votes + 1
            };
            return [updated_comment,...other_comments]

        case THUMB_DOWN_COMMENT:
            const comment = state.filter(c => c.id === action.id);
            const other_comments = state.filter(c => c.id !== action.id);
            const updated_comment = {
                id: action.id,
                text: comment.text,
                votes: comment.votes - 1
            };
            return [updated_comment,...other_comments]

        default:
            return state;
    }
}

export default comments;