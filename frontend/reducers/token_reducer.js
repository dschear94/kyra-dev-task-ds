import {
    RECEIVE_VIDEOS,
} from '../actions/video_actions';

const tokenReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos.nextPageToken ? action.videos.nextPageToken : state;
        default:
            return state;
    }
};

export default tokenReducer;
