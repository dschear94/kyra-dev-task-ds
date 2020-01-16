import {
    RECEIVE_VIDEOS,
} from '../actions/video_actions';

const videosReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            const newState = state.concat(action.videos.items);
            if (newState.length > action.videos.pageInfo.totalResults) {
                return action.videos.items
            } else {
                return newState;
            }
        default:
            return state;
    }
};

export default videosReducer;
