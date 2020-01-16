import { combineReducers } from 'redux';

import videos from './videos_reducer'
import token from './token_reducer'

export default combineReducers({
    videos,
    token
});
